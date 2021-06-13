import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { LignePanier } from 'src/app/interfaces/lignePanier';
import { Livres } from 'src/app/interfaces/livres';
import { Panier } from 'src/app/interfaces/panier';
import { LivresService } from 'src/app/services/livres.service';



@Component({
  selector: 'app-affichage-livre',
  templateUrl: './affichage-livre.component.html',
  styleUrls: ['./affichage-livre.component.css']
})
export class AffichageLivreComponent implements OnInit {
  panier: Panier = {};
  lignePanier: LignePanier = {
    quantiteArticle: 1,
   // referenceArticle: 0,
    prixTotalLigne: 0,
    livres : {}
  };
  livres: Livres[] = [];
  livre: Livres = {};
  articleForm = new FormGroup({
    quantite: new FormControl(''),
  })
  defaultQuantityValue: number = 1;

  showModal: boolean = false;
  constructor(private livresService: LivresService) {
    this.articleForm.controls['quantite'].setValue(this.defaultQuantityValue, { onlySelf: true });
  }

  ngOnInit(): void {
    this.livresService.getAllLivres().subscribe(
      res => {
        for (let r of res) {
          this.livres.push(r);
        }
      }
    )
  }

  get quantite(): AbstractControl | null {
    return this.articleForm.get('quantite');
  }
  openModal(i) {
    this.lignePanier.livres = i;
    this.showModal = true; // Show-Hide Modal Check


  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  IncQuantite(qtt) {
    if (this.lignePanier.quantiteArticle < 10)
      this.lignePanier.quantiteArticle = qtt + 1;

  }

  DecQuantite(qtt) {
    if (this.lignePanier.quantiteArticle > 1)
      this.lignePanier.quantiteArticle = qtt - 1;

  }


  ajouterPanier(livre) {

    
      const lignesPanier = (() => {
        const fieldValue = localStorage.getItem('panier');
        return fieldValue === null ? [] : JSON.parse(fieldValue);
      })();
      if (lignesPanier.length == 0) {
        lignesPanier.push({
          quantiteArticle: this.lignePanier.quantiteArticle,
          referenceArticle: this.lignePanier.livres.reference_article,
          prixTotalLigne: this.lignePanier.quantiteArticle * this.lignePanier.livres.prixUnitaire,
          livres: this.lignePanier.livres,
        });
      } else {
        let l = lignesPanier.find(elt => elt.referenceArticle === this.lignePanier.livres.reference_article);
        console.log(this.livre.reference_article)
        if (l) {
          lignesPanier[lignesPanier.indexOf(l)].quantiteArticle += this.lignePanier.quantiteArticle
          lignesPanier[lignesPanier.indexOf(l)].prixTotalLigne = lignesPanier[lignesPanier.indexOf(l)].quantiteArticle * this.lignePanier.livres.prixUnitaire
        } else {
          lignesPanier.push({
            quantiteArticle: this.lignePanier.quantiteArticle,
            referenceArticle: this.lignePanier.livres.reference_article,
            prixTotalLigne: this.lignePanier.quantiteArticle * this.lignePanier.livres.prixUnitaire,
            livres: this.lignePanier.livres,
          });
        }
      }
      localStorage.setItem('panier', JSON.stringify(lignesPanier));
    }
  
  

}

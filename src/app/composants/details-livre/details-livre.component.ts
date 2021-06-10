import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LignePanier } from 'src/app/interfaces/lignePanier';
import { Livres } from 'src/app/interfaces/livres';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrls: ['./details-livre.component.css']
})
export class DetailsLivreComponent implements OnInit {
  livre: Livres = {};
  quantiteArticle: number = 1;

  constructor(
    private route: ActivatedRoute,
    private livresService: LivresService
  ) { }

  ngOnInit(): void {
    this.livresService.searchById(this.route.snapshot.params.id).subscribe(
      (res) => {
        this.livre = res;
        console.log(this.livre);
      }
    );
  }
  IncQuantite() {
    if (this.quantiteArticle < this.livre.quantiteEnStock)
      this.quantiteArticle++;
  }
  DecQuantite() {
    if (this.quantiteArticle > 1)
      this.quantiteArticle--;
  }
  ajouterPanier() {
    const lignesPanier = (() => {
      const fieldValue = localStorage.getItem('panier');
      return fieldValue === null ? [] : JSON.parse(fieldValue);
    })();
    if (lignesPanier.length == 0) {
      lignesPanier.push({
        quantiteArticle: this.quantiteArticle,
        prixTotalLigne: this.quantiteArticle * this.livre.prixUnitaire,
        livre: this.livre
      });
    } else {
      let l = lignesPanier.find(elt => elt.referenceArticle === this.livre.reference_article);
      if (l) {
        if (l.quantiteArticle + this.quantiteArticle <= this.livre.quantiteEnStock) {
          lignesPanier[lignesPanier.indexOf(l)].quantiteArticle += this.quantiteArticle
          lignesPanier[lignesPanier.indexOf(l)].prixTotalLigne = lignesPanier[lignesPanier.indexOf(l)].quantiteArticle * this.livre.prixUnitaire
        } else {
          console.log("plus d'article en stock");
        }
      } else {
        lignesPanier.push({
          quantiteArticle: this.quantiteArticle,
          prixTotalLigne: this.quantiteArticle * this.livre.prixUnitaire,
          livre: this.livre
        });
      }
    }
    localStorage.setItem('panier', JSON.stringify(lignesPanier));
  }
}

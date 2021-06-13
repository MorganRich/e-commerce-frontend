import { Component, OnInit } from '@angular/core';
import { Adresse } from 'src/app/interfaces/adresse';
import { Commande } from 'src/app/interfaces/commande';
import { LignePanier } from 'src/app/interfaces/lignePanier';
import { Panier } from 'src/app/interfaces/panier';
import { Personne } from 'src/app/interfaces/personne';
import { CommandeService } from 'src/app/services/commande.service';
import { PersonneService } from 'src/app/services/personne.service';
import { CompteService } from 'src/app/services/compte.service';
import { ArticleService } from 'src/app/services/article.service';
import { nextTick } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  personne: Personne = {};
  adresseFacturation: Adresse = {
    //idType: 0 
  };
  adresseLivraison: Adresse = {
  // idType: 1
  };

  ligneCommande: LignePanier[] = [];
  commande: Commande = {
    idUtilisateur: 0,
    prixTotalCommande: 0,
    lignesCommande: [],

  };

  missingAdresseMsg : string = '';
  cbPayment : string = 'cb';
  ppPayment : string = 'pp ';
  fraisDePort : number = 5;
  total : number = 0;


 


  constructor(private commandeService: CommandeService,
    private compteService: CompteService,
    private articleService: ArticleService,
    private routeur: Router ) { }

  ngOnInit(): void {

   

    this.personne.id = JSON.parse(localStorage.getItem('user')).idUtilisateur;
    this.compteService.searchAdresse(this.personne.id).subscribe(
      res => {
        console.log(res , "res")
        if(res[0] != null || undefined) {
         
        this.adresseFacturation = res[0];
        console.log(this.adresseFacturation)
         } else  {
          this.missingAdresseMsg = "Ajoutez une adresse de facturation pour valider la commande"
        }
        if(res[1] != null || undefined) {
        this.adresseLivraison = res[1];
        } else  {
          this.missingAdresseMsg = "Ajoutez une adresse de livraison pour valider la commande"
        }
       
      });

    

    this.commande.lignesCommande = JSON.parse(localStorage.getItem('panier'));
    for (let lp of this.commande.lignesCommande) {
      this.ligneCommande.push(lp)
      this.commande.prixTotalCommande += lp.prixTotalLigne;

    }

    
  }



 
  toggleEditable(event) {

    if ( event.target.checked ) {
       this.commandeService.addAdresse(this.personne.id, this.adresseFacturation.idAdresse, this.adresseFacturation).subscribe(
         res => {
          this.compteService.searchAdresse(this.personne.id).subscribe(
            res => {
            
              this.adresseLivraison.codePostal = res[1].codePostal;
              this.adresseLivraison.complement = res[1].complement;
              this.adresseLivraison.idAdresse = res[1].idAdresse;
              this.adresseLivraison.numRue = res[1].numRue;
              this.adresseLivraison.typeDeVoie = res[1].typeDeVoie;
              this.adresseLivraison.ville = res[1].ville;
              this.adresseLivraison.idType = res[1].idType;
            });
         }
       )
       
   }
}


  qttyCheck() {

    this.commande.lignesCommande = this.ligneCommande
    this.commande.idUtilisateur = this.personne.id;
    for (let l of this.commande.lignesCommande) {
      this.commande.prixTotalCommande += l.prixTotalLigne;
      
    }

    this.total = this.commande.prixTotalCommande + this.fraisDePort;
    return new Promise(resolve => {
      this.commande.lignesCommande.forEach(elt => {
        this.articleService.getQuantiteById(elt.livres.reference_article).pipe()
          .subscribe(
            resp => {
              this.commande.lignesCommande[this.commande.lignesCommande.indexOf(elt)].quantiteEnStock = resp.quantiteEnStock;
              resolve(elt)
            })
      })
    })
  }



  commander() {

    let b: boolean[] = []
    this.qttyCheck().then((resp) => {
      this.commande.lignesCommande.some(elt => {
        b.push(elt.quantiteArticle > elt.quantiteEnStock)
      })
      let f = b.find(elt => elt = true);
      if (f) {   
        this.routeur.navigateByUrl('/'); //url du panier
      } else {
        this.commandeService.commander(this.commande).subscribe(
          res => {
            this.commande.lignesCommande[b.indexOf(f)].quantiteEnStock -= this.commande.lignesCommande[b.indexOf(f)].quantiteArticle;
            localStorage.removeItem('panier');
            this.routeur.navigateByUrl('/');
          });
      }

    })
   
  }

}

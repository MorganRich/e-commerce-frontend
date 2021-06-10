import { Component, OnInit } from '@angular/core';
import { LignePanier } from 'src/app/interfaces/lignePanier';
import { Livres } from 'src/app/interfaces/livres';
import { Panier } from 'src/app/interfaces/panier';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  lignePanier: LignePanier[] = []

  constructor(private livresService: LivresService) { }

  ngOnInit(): void {
    this.lignePanier = JSON.parse(localStorage.getItem('panier'));
    console.log(this.lignePanier);
  }

  IncQuantite(i: number) {
    if (this.lignePanier[i].quantiteArticle < this.lignePanier[i].livre.quantiteEnStock)
      this.lignePanier[i].quantiteArticle++;
      this.lignePanier[i].prixTotalLigne=this.lignePanier[i].quantiteArticle*this.lignePanier[i].livre.prixUnitaire;
  }
  DecQuantite(i: number) {
    if (this.lignePanier[i].quantiteArticle > 1)
      this.lignePanier[i].quantiteArticle--;
      this.lignePanier[i].prixTotalLigne=this.lignePanier[i].quantiteArticle*this.lignePanier[i].livre.prixUnitaire;
  }
  Delete(i: number) {
    this.lignePanier.splice(i, 1)
  }
}

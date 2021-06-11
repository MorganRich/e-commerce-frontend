import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  sousTotal: number = 0;
  fraisDePort: number = 0;
  pourcentage: number = 0.1;
  montantTotal: number = 0;
  lignePanier: LignePanier[] = []

  constructor(
    private livresService: LivresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lignePanier = JSON.parse(localStorage.getItem('panier'));
    for (let lp of this.lignePanier) {
      this.sousTotal += lp.prixTotalLigne;
    }
    this.fraisDePort = this.sousTotal * this.pourcentage;
    this.montantTotal = this.sousTotal + this.fraisDePort;
    console.log(this.lignePanier);
  }
  ngOnDestroy(): void {
    localStorage.setItem('panier', JSON.stringify(this.lignePanier));
    console.log('destroy');
  }
  IncQuantite(i: number) {
    if (this.lignePanier[i].quantiteArticle < this.lignePanier[i].livre.quantiteEnStock) {
      this.lignePanier[i].quantiteArticle++;
      this.lignePanier[i].prixTotalLigne = this.lignePanier[i].quantiteArticle * this.lignePanier[i].livre.prixUnitaire;
      this.sousTotal += this.lignePanier[i].livre.prixUnitaire;
      this.fraisDePort = this.sousTotal * this.pourcentage;
      this.montantTotal = this.sousTotal + this.fraisDePort;
    }
  }
  DecQuantite(i: number) {
    if (this.lignePanier[i].quantiteArticle > 1) {
      this.lignePanier[i].quantiteArticle--;
      this.lignePanier[i].prixTotalLigne = this.lignePanier[i].quantiteArticle * this.lignePanier[i].livre.prixUnitaire;
      this.sousTotal -= this.lignePanier[i].livre.prixUnitaire;
      this.fraisDePort = this.sousTotal * this.pourcentage;
      this.montantTotal = this.sousTotal + this.fraisDePort;
    }
  }
  Delete(i: number) {
    this.lignePanier.splice(i, 1)
    this.sousTotal = 0;
    for (let lp of this.lignePanier) {
      this.sousTotal += lp.prixTotalLigne;
      this.fraisDePort = this.sousTotal * this.pourcentage;
      this.montantTotal = this.sousTotal + this.fraisDePort;
    }
  }
  passerCommande() {
    localStorage.setItem('panier', JSON.stringify(this.lignePanier));
    localStorage.setItem('infoCommande', JSON.stringify(this.fraisDePort));
    this.router.navigateByUrl('/commande');
  }
}

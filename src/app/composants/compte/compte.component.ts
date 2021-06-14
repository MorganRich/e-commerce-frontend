import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commande } from 'src/app/interfaces/commande';
import { Personne } from 'src/app/interfaces/personne';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte: Personne = {}
  commandes: Commande[] = []

  compteForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    adresses: this.fb.array([
      this.fb.group({
        typeDeVoie: ['', Validators.required],
        numeroRue: ['', Validators.required],
        complement: ['', Validators.required],
        ville: ['', Validators.required],
        codePostal: ['', Validators.required],
      }),
      this.fb.group({
        typeDeVoie: ['', Validators.required],
        numeroRue: ['', Validators.required],
        complement: ['', Validators.required],
        ville: ['', Validators.required],
        codePostal: ['', Validators.required],
      }),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private compteService: CompteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.compte = JSON.parse(localStorage.getItem('user'));
    console.log(this.compte);
    this.compteService.searchAdresse(this.compte.idUtilisateur).subscribe(
      (res) => {
        this.compte.adresse = res;
        this.compteForm = this.fb.group({
          nom: [this.compte.nom, Validators.required],
          prenom: [this.compte.prenom, Validators.required],
          email: [this.compte.email, Validators.required],
          adresses: this.fb.array([
            this.fb.group({
              typeDeVoie: [this.compte.adresse[0].typeDeVoie, Validators.required],
              numeroRue: [this.compte.adresse[0].numRue, Validators.required],
              complement: [this.compte.adresse[0].complement, Validators.required],
              ville: [this.compte.adresse[0].ville, Validators.required],
              codePostal: [this.compte.adresse[0].codePostal, Validators.required],
            }),
            this.fb.group({
              typeDeVoie: [this.compte.adresse[1].typeDeVoie, Validators.required],
              numeroRue: [this.compte.adresse[1].numRue, Validators.required],
              complement: [this.compte.adresse[1].complement, Validators.required],
              ville: [this.compte.adresse[1].ville, Validators.required],
              codePostal: [this.compte.adresse[1].codePostal, Validators.required],
            }),
          ]),
        });
      }
    )
    this.compteService.searchCommandes(this.compte.idUtilisateur).subscribe(
      (res) => {
        this.commandes = res;
        console.log(this.commandes);
      }
    )
  }
  modifierCompte() {
    this.router.navigateByUrl('/compte/creation');
  }
  deconnexion() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/livres');
  }
  get adresses(): FormArray {
    return this.compteForm.controls.adresses as FormArray;
  }
}
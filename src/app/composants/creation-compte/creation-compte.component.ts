import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {
  compte: Personne = {}
  newCompte : Personne = {}
  modif: boolean = false;

  compteForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    motDePasse: ['', Validators.required],
    adresses: this.fb.array([
      this.fb.group({
        typeDeVoie: ['', Validators.required],
        numRue: ['', Validators.required],
        complement: ['', Validators.required],
        ville: ['', Validators.required],
        codePostal: ['', Validators.required],
      }),
      this.fb.group({
        typeDeVoie: ['', Validators.required],
        numRue: ['', Validators.required],
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
    if (localStorage.getItem('user')) {
      this.modif = true;
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
                numRue: [this.compte.adresse[0].numRue, Validators.required],
                complement: [this.compte.adresse[0].complement, Validators.required],
                ville: [this.compte.adresse[0].ville, Validators.required],
                codePostal: [this.compte.adresse[0].codePostal, Validators.required],
              }),
              this.fb.group({
                typeDeVoie: [this.compte.adresse[1].typeDeVoie, Validators.required],
                numRue: [this.compte.adresse[1].numRue, Validators.required],
                complement: [this.compte.adresse[1].complement, Validators.required],
                ville: [this.compte.adresse[1].ville, Validators.required],
                codePostal: [this.compte.adresse[1].codePostal, Validators.required],
              }),
            ]),
          });
        }
      )
    }
  }
  ajouterCompte() {
    this.compte = this.compteForm.value;
    console.log(this.compte);
    this.compteService.addCompte(this.compte).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
  modifierCompte() {
    console.log(this.compte);
    this.newCompte = this.compteForm.value;
    this.newCompte.idUtilisateur = this.compte.idUtilisateur;
    console.log(this.newCompte);
    this.compteService.modifyCompte(this.newCompte).subscribe(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/compte/gestion');
      }
    )
  }
  annulerCreation() {
    this.router.navigateByUrl('/connexion');
  }
  annulerModification() {
    this.router.navigateByUrl('/compte/gestion');
  }
  get adresses(): FormArray {
    return this.compteForm.controls.adresses as FormArray;
  }
}

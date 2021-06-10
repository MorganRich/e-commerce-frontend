import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {
  compte: Personne = {}

  compteForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    motDePasse: ['', Validators.required],
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
    private compteService: CompteService
  ) { }

  ngOnInit(): void {
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
  annulerCreation() {

  }
  get adresses(): FormArray {
    return this.compteForm.controls.adresses as FormArray;
  }
}

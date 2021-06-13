import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livres } from 'src/app/interfaces/livres';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-resultat-recherche',
  templateUrl: './resultat-recherche.component.html',
  styleUrls: ['./resultat-recherche.component.css']
})
export class ResultatRechercheComponent implements OnInit {
  userForm!: FormGroup;
  resultatRecherche: Livres[] = [];
  nbResultatRecherche: number = 0;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private livresService: LivresService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      titre: [this.route.snapshot.params.param],
      auteur: [''],
      genre: ['']
    });
    this.livresService.searchByTitre(this.route.snapshot.params.param).subscribe(
      (res) => {
        this.resultatRecherche = res;
        this.nbResultatRecherche = res.length;
        console.log(this.resultatRecherche);
      }
    );

  }
  afficherDetails(idLivre: string) {
    this.router.navigate(['/livres/' + idLivre]);

  }
  rechercherLivre() {

    this.livresService.searchByTitre(this.userForm.get('titre').value).subscribe(
      (res) => {
        this.resultatRecherche = res;
        this.nbResultatRecherche = res.length;
        console.log(this.resultatRecherche);
      }
    );

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  barreDeRecherche = this.fb.group({
    recherche: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  rechercherLivre() {
    console.log(this.barreDeRecherche.get('recherche').value);
    this.router.navigate(['/recherche/' + this.barreDeRecherche.get('recherche').value]);
  }
}

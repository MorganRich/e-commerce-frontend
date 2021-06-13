import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  auth: boolean = true;
  barreDeRecherche = this.fb.group({
    recherche: ['', Validators.required],
  });

  iconePanier: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private livresService: LivresService
  ) { }

  ngOnInit(): void {
      const q = JSON.parse(localStorage.getItem('panier'))
       this.iconePanier = q.length;
    
  }

  rechercherLivre() {
    this.router.navigate(['/recherche/' + this.barreDeRecherche.get('recherche').value]);
  }



}

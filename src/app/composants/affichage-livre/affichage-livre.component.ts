import { Component, OnInit } from '@angular/core';
import { Livres } from 'src/app/interfaces/livres';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-affichage-livre',
  templateUrl: './affichage-livre.component.html',
  styleUrls: ['./affichage-livre.component.css']
})
export class AffichageLivreComponent implements OnInit {
livres: Livres[] = [];
  constructor(private livresService: LivresService ) { }

  ngOnInit(): void {
    this.livres = this.livresService.getAllLivres();
  }

}

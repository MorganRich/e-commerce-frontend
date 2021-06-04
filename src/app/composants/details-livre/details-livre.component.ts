import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livres } from 'src/app/interfaces/livres';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrls: ['./details-livre.component.css']
})
export class DetailsLivreComponent implements OnInit {
  livre: Livres = {};

  constructor(
    private route: ActivatedRoute,
    private livresService: LivresService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        let idLivre = value.get('id');
        this.livre = this.livresService.getOneById(idLivre);
      }
    )
  }

}

import { Injectable } from '@angular/core';
import { Livres } from '../interfaces/livres';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  livres: Livres[] = [
    {
      idLivre: "200", 
      titre: "les fleurs du mal",
      numISBN: "300",
      image: "image",
      format: "poche",
      reference: "200lfdm",
      editeur: "flamarion",
      genre: "poesie",
      auteur: "charles baudelaire",
    },
    {
      idLivre: "201", 
      titre: "les misérables",
      numISBN: "301",
      image: "image",
      format: "poche",
      reference: "201lm",
      editeur: "flamarion",
      genre: "roman",
      auteur: "victor hugo",
    },
  ]
  constructor() { }
  getAllLivres() {
    return this.livres;
  }
}

import { Injectable } from '@angular/core';
import { Livres } from '../interfaces/livres';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  livres: Livres[] = [
    {
      idLivre: "200", 
      titre: "Les Fleurs du Mal",
      numISBN: "300",
      image: "../assets/images/lesfleursdumal.jpg",
      format: "Poche",
      reference: "200lfdm",
      editeur: "Flamarion",
      genre: "Poèsie",
      auteur: "Charles Baudelaire",
    },
    {
      idLivre: "201", 
      titre: "Les Misérables",
      numISBN: "301",
      image: "image",
      format: "Poche",
      reference: "201lm",
      editeur: "Flamarion",
      genre: "Roman",
      auteur: "Victor Hugo",
    },
  ]
  constructor() { }
  getAllLivres() {
    return this.livres;
  }
}

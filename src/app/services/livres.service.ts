import { Injectable } from '@angular/core';
import { Livres } from '../interfaces/livres';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  private url = 'http://localhost:3000/livre/'

  constructor(private http: HttpClient) { }

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
    {
      idLivre: "202",
      titre: "Sur La Route",
      numISBN: "302",
      image: "image",
      format: "Poche",
      reference: "202slr",
      editeur: "Flamarion",
      genre: "Roman",
      auteur: "Jack Kerouac",
    },
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
    {
      idLivre: "202",
      titre: "Sur La Route",
      numISBN: "302",
      image: "image",
      format: "Poche",
      reference: "202slr",
      editeur: "Flamarion",
      genre: "Roman",
      auteur: "Jack Kerouac",
    },
  ]

  getAllLivres() {
    return this.livres;
  }
  getOneById(id) {
    return this.livres.find((elt) => elt.idLivre == id);
  }
  searchByTitre(recherche: string) {
    console.log(this.url + "titre/" + recherche);
    return this.http.get<Array<Livres>>(this.url + "titre/" + recherche);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livres } from '../interfaces/livres';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivresService {

  private url = 'http://localhost:3000/livre/';
  constructor(private http: HttpClient) { }

  getAllLivres() {
     return this.http.get<Array<Livres>>(this.url);
  }
  getOneById(id) {
    return this.http.get<Livres>(this.url + id)
  }
  
  searchByTitre(recherche: string) {
    console.log(this.url + "titre/" + recherche);
    return this.http.get<Array<Livres>>(this.url + "titre/" + recherche);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private url = 'http://localhost:3000/utilisateur/'

  constructor(private http: HttpClient) { }

  addCompte(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }
}

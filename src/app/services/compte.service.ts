import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adresse } from '../interfaces/adresse';

import { Commande } from '../interfaces/commande';

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


  searchAdresse(idUser: number) {
    console.log(this.url + idUser + "/adresses");
    return this.http.get<Array<Adresse>>(this.url + idUser + "/adresses");
  }

 

  modifyCompte(p: Personne) {
    return this.http.put<Personne>(this.url + p.idUtilisateur, p);
  }
  searchAdresse(idUser: number) {
    return this.http.get<Array<Adresse>>(this.url + idUser + "/adresses");
  }
  searchCommandes(idUser: number) {
    console.log(this.url + "commande/" + idUser);
    return this.http.get<Array<Commande>>(this.url + "commande/" + idUser);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panier } from '../interfaces/panier';
import { Commande } from '../interfaces/commande';
import { Adresse } from '../interfaces/adresse';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private url = 'http://localhost:3000/commande'
  constructor(private http: HttpClient) { }

  commander(c: Commande ) {
    return this.http.post<Panier>(this.url, c);
  }

  addAdresse(idUser: number, idAdresse: number, a :Adresse) {
   
    return this.http.post<number>(this.url+ "/adresse/"+ idUser + "/" +idAdresse, a );
  }
  
}

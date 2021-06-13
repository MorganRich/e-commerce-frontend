import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url = 'http://localhost:3000/article/stock/'
  constructor(private http: HttpClient) { }


 getQuantiteById(referenceArticle: number) {
     return this.http.get<Article>(this.url + referenceArticle)
 }

 getProductsInCart () {
 const q = JSON.parse(localStorage.getItem('panier'))
  return q.length;
 }
}

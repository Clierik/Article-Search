import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public articleClick(article: object) {
    return this.http.post('http://localhost:3000/clicks', article);
  }

  public articleSearch(search: string) {
    return this.http.get(`http://localhost:3000/search/${search}`);
  }

  public getTopArticles() {
    return this.http.get('http://localhost:3000/top');
  }


}

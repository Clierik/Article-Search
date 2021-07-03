import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Article } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public artickleClick(article: Article) {
    // for when an artickle is clicked
  }

  public artickleSearch(search: string) {
    // for when the search button is clicked
  }

  public getTopArticles() {
    // for when the website initialy loads
  }

}

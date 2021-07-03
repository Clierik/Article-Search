import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Response, Article } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  // public getArticleList(params: string)
  // :Observable<Response<Article>>
  // {
    // let params = new HttpParams().set();
    // Cannot GET /undefinedmax=9&top-headlines&token=undefined
    // return this.http.get<Response<Article>>(`${env.BASE_URL}` + 'max=9&' + 'top-headlines&' + `token=${env.APIToken}`
    //   encodeURIComponent
    // );
    // return this.http.get(`${env.BASE_URL}${encodeURIComponent(params)}token=${env.APIToken}`);
  // }

  // tslint:disable-next-line: typedef
  // public getArticleList() {
  //   // const params = new HttpParams();
  //   // params.append('searchType', data);
  //   // return this.http.get('http://localhost:3000' + '/api/top-atricles', {params});
  // }

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

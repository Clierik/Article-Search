import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }

  passArticleData(articles:any) {
    this.articles = articles;
  }

  openArticle(article: Article) {
    window.open(article.url, '_blank');
    this.http.articleClick(article).subscribe(() => {}, err => {
      console.log(err);
    });
  }

}

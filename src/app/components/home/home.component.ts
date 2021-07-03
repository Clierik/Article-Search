import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // public articles: Array<Article>;
  // private routeSub: Subscription;
  // private articleSub: Subscription;
  articles: Array<any> = [];
  articlesResp = [
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
    {
      title: 'Nick Leeder appointed as latest head of Google Ireland',
      description: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.',
      content: 'Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]',
      url: 'https://www.siliconrepublic.com/companies/nick-leeder-google-ireland',
      image: 'https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg',
      publishedAt: '2020-03-23T13:58:53Z',
      source: {
          name: 'Silicon Republic',
          url: 'https://www.siliconrepublic.com/'
      }
    },
  ];

  constructor(private router: Router,
              private httpService: HttpService,
              private activateRoute: ActivatedRoute) {
    this.printArticles();
  }

  ngOnInit(): void {

    // this.routeSub = this.activateRoute.params.subscribe((params: Params) => {
    //   if (params['top-headlines']) {
    //     this.getTopArticles()
    //   }
    // });

    // const searchType = 'top-headlines';
    // this.httpService.getArticleList(searchType).subscribe(resp => {
    //   console.log(resp);
    // }, err => {
    //   console.log(err);
    // });

    // this.httpService.getArticleList("top-headlines?max=9?").subscribe(resp => {
    //   console.log(resp);
    // });
  }

  // tslint:disable-next-line: typedef
  printArticles() {
    this.articles = [];
    setTimeout(() => {
      this.articles = this.articlesResp;
      console.log(this.articles);
    }, 1500);
  }

  openArticle(artickle: Article) {
    window.open(artickle.url, '_blank');
    this.httpService.artickleClick(artickle);
  }

  ngOnDestroy(): void {}

}

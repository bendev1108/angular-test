import { Component, OnInit } from '@angular/core';
import { NewsService } from './shared/news.service';
import { Article, News } from './shared/news.model';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  news: News;
  articles: Article[];
  totalResults: Number;
  sub: Subscription;
  isRolling: false;

  constructor(private newsSevice: NewsService, private titleNews: Title) { }

  ngOnInit() {
    this.titleNews.setTitle('ข่าวสาร')
    this.getNews();
  }

  getNews(){

    // this.isRolling = true;

    this.sub = this.newsSevice.getNews().subscribe(
      (news) => {
        // console.log(news);
        // this.news = news;
        this.articles = news.articles;
        this.totalResults = news.totalResults;
      }, 
      (error) => {
        console.log(error);
        this.isRolling = false;
      },
      () => {
        this.isRolling = false;
      }
    );
  }

  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  // }


}

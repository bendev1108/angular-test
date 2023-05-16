import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a1372ae9872c4cbf8b8982f84a0d9077";

  constructor(private http: HttpClient) { }

  getNews(): Observable<News>{
    return this.http.get<News>(this.newsUrl);
  }
}


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(public http: HttpClient) { }
  topNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a6b650cbd7c547758e3196bd2a4372eb'
  topHeadline() : any
  {
    return this.http.get(this.topNews)
  }
}

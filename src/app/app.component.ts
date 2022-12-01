import { Component, OnInit } from '@angular/core';
import { NewsapiService } from './newsapi.service';


@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'news-app';
  result:any[] = [];

constructor(private newsapi: NewsapiService) {
 
}
ngOnInit() :void
{
  this.newsapi.topHeadline().subscribe((result : any)=>{
    this.result = result.articles;
    console.log('show result', this.result)
   })
}

}
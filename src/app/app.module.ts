import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './top-news/top-news.component';
import {NgxTimeSchedulerModule} from 'ngx-time-scheduler';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    
  ],
  imports: [
    BrowserModule, NgxTimeSchedulerModule,
    AppRoutingModule, HttpClientModule, 
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

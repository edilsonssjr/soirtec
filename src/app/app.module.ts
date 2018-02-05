import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { TestService } from './test.service';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import {NgxPaginationModule} from 'ngx-pagination';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    routing,
    LoadingModule,
    NgxPaginationModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

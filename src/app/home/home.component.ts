import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TestService } from './../test.service';
import {MatSnackBar} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  id: any;

  logo = 'assets/img/soirtec.svg';

  movies : any[];

  total : any;

  vetTam : any;

  searchMovie = '';

  numPages : any;

  pages = [];

  currentPage = 1;

  public loading = false;

  constructor(private testeService: TestService) {   }

  ngOnInit() {
  }

  getMovies(value:string){
    this.loading = true;
    this.searchMovie == `${value}`
    this.testeService.movies(this.searchMovie).subscribe(
      res => {
        this.pages = [];
        this.loading = false;
        this.movies = res.Search;
        if(this.movies == undefined){
           $('.search').append('<p class="lista errorMovie">Filme não econtrado <img src="assets/img/warning.svg"></p>');
        }else{
          this.vetTam = this.movies.length;
          this.total = res.totalResults;
          if(this.total > 10){
            $( "#next" ).hide();          }
        }
        this.paginationMovies();
        $( ".busca" ).hide();
        $( ".clean" ).show();
      },
      error => console.log(error)
    )
  }

  pageChange(e){
    console.log(122);
  }
  

  paginationMovies(){
    for (let i = 1; i <= this.total; i++) {
      this.pages.push(i);
    }
  }

  clear(){
    this.total = 0;
    $( ".lista" ).remove();
    this.searchMovie = '';
    $( ".clean" ).hide();
    $( ".busca" ).show();    
  }

}

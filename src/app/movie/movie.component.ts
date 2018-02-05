import { Component, OnInit } from '@angular/core';
import { TestService } from './../test.service';

import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  logo = 'assets/img/soirtec.svg';

  params : any

  movie : object;

  public loading = false;

  constructor(private testeService: TestService,private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.params = params );
  }

  ngOnInit() {
    this.details(this.params.id);
  }

  details(id){
    this.loading = true;
    this.testeService.movieDetail(this.params.id).subscribe(
      res => {
        this.loading = false;
        this.movie = res;
      },
      error => console.log(error)
    )
  }
}

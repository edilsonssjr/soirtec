import { HomeComponent } from './home/home.component';
import { Http, Response, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest } from 
'@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService {

  private url = 'http://www.omdbapi.com/?';

  private key = '6588c89d';

  constructor(private http: Http) { }
  
  movies(title): Observable<any> {
    return this.http.get(this.url +'s=' + title + '&apikey=' + this.key)
        .map((res: Response) => res.json())
  }

  movieDetail(id){
    return this.http.get(this.url +'i=' + id + '&apikey=' + this.key)
    .map((res: Response) => res.json())
  }

  moviesPage(page,title): Observable<any> {
    return this.http.get(this.url +'s=' + title + '&apikey=' + this.key + '&page=' + page)
        .map((res: Response) => res.json())
  }

}

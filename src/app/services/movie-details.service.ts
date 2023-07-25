import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';
import { baseUrl,myheaders } from 'src/env';
import { MResponse, MResults } from '../interfaces/upcoming';


@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private http: HttpClient) { }

  getMovieDetails(movId:number){
    return this.http.get(baseUrl+movId,{headers:myheaders})
  }

}

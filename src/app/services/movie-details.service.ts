import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map,Observable } from 'rxjs';
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


  // for passing the movie data to the favourite page (selected data should  pass to the favourites.)
  // behavour subject? ref-ts of favs,details and the movdetails service
  private selectedMovieSource = new BehaviorSubject<any>(null);
  selectedMovie$ = this.selectedMovieSource.asObservable();

  setSelectedMovie(movie: any) {
    this.selectedMovieSource.next(movie);
  }

}

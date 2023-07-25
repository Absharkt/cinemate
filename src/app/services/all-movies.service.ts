import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { baseUrl,myheaders } from 'src/env';
import { MResponse, MResults } from '../interfaces/upcoming';

@Injectable({
  providedIn: 'root'
})

export class AllMoviesService {

  constructor(private http: HttpClient) { }

  upcomingMovies():Observable<MResults[]>{
    return this.http.get<MResponse>(baseUrl + 'upcoming', { headers:myheaders }).pipe(
      map((res:any)=>{
        return res.results.map((movie:any)=>{
            return {
              id:movie.id,
              title: movie.title,
              language: movie.original_language,
              overview: movie.overview,
              release: movie.release_date,
              imgUrl: movie.backdrop_path,
              posterUrl: movie.backdrop_path
            }
        })
      })
    )
  }

  nowPlayingMovies():Observable<MResults[]>{
    return this.http.get<MResponse>(baseUrl + 'now_playing', { headers: myheaders }).pipe(
      map((res:any)=>{
        return res.results.map((movie:any)=>{
            return {
              id:movie.id,
              title: movie.title,
              language: movie.original_language,
              overview: movie.overview,
              release: movie.release_date,
              imgUrl: movie.backdrop_path,
              posterUrl: movie.backdrop_path
            }
        })
      })
    )
  }

}

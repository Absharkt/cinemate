import { Component, OnInit } from '@angular/core';
import { AllMoviesService } from '../services/all-movies.service';
import { MResults } from '../interfaces/upcoming';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit{

  constructor(private service: AllMoviesService){}

  ngOnInit(): void {
    this.getNowPlayingMovies()
  }

  nowPlaying:MResults[]

  getNowPlayingMovies() {
    this.service.nowPlayingMovies().subscribe((res)=>{
      console.log(res);
      this.nowPlaying = res
    })
  }



}

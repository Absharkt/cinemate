import { Component, OnInit } from '@angular/core';
import { AllMoviesService } from '../services/all-movies.service';
import { MResults } from '../interfaces/upcoming';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit{

  constructor(private service: AllMoviesService){}

  ngOnInit(): void {
    this.getUpcomingMovies()
  }

  upcoming:MResults[]

  getUpcomingMovies() {
    this.service.upcomingMovies().subscribe((res)=>{
      console.log(res);
      this.upcoming = res
    })
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from '../services/movie-details.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  movieId: number;
  movieDetails: any

  constructor(private route: ActivatedRoute,private service: MovieDetailsService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = params['title'];
    });
    // method2==================================================
    // this.movieTitle = this.route.snapshot.params['title']
    // console.log(this.movieTitle);
    // ==========================================================

    this.getMovie()
    

    
  }

  // for getting the particular movie's deatils
  getMovie(){
    this.service.getMovieDetails(this.movieId).subscribe((res)=>{
      console.log(res);
      this.movieDetails = res
      
      
    })
  }

}

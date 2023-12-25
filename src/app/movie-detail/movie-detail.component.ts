import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieDetailsService } from '../services/movie-details.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  movieId: number;
  movieDetails: any

  constructor(private activeRoute: ActivatedRoute,private router: Router,private service: MovieDetailsService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
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
      // console.log(res);
      this.movieDetails = res
      
      
    })
  }

  addToFav(){
    this.router.navigate(['/favourites']);
    this.service.setSelectedMovie(this.movieDetails);
  }


}

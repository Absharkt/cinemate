import { Component } from '@angular/core';
import { MovieDetailsService } from '../services/movie-details.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  selectedMovie: any;

  constructor(private movieService: MovieDetailsService) {}

  ngOnInit() {
    this.movieService.selectedMovie$.subscribe((movie) => {
      this.selectedMovie = movie;
      console.log(this.selectedMovie);
      
      // Do something with the selected movie in your favorites component
    });
  }

}

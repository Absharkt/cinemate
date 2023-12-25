import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrendingComponent } from './trending/trending.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ProfileComponent } from './profile/profile.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {
    path: '', component: AllMoviesComponent,
    children: [
      { path: 'upcoming', component: UpcomingComponent },
      { path: 'trending', component: TrendingComponent }
    ]
  },
  { path: 'profile',component: ProfileComponent },
  { path: 'movie/:title',component: MovieDetailComponent },
  { path: 'favourites',component: FavouritesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

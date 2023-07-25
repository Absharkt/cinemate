import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrendingComponent } from './trending/trending.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AllMoviesService } from './services/all-movies.service';
import { ProfileComponent } from './profile/profile.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpcomingComponent,
    TrendingComponent,
    AllMoviesComponent,
    ProfileComponent,
    MovieDetailComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AllMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

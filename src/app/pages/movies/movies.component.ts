import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private service: MovieApiServiceService) {}

  trendingMovieResult: any = [];

  ngOnInit(): void {
    
    this.trendingMovies();
    
  }

  //Trending movies
  trendingMovies() {
    this.service.getMostPopularMovies().subscribe(result => {
      this.trendingMovieResult = result.items;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  public keySubject = new Subject<KeyboardEvent>()
  constructor(private httpClient: HttpClient) { }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    const apiUrl = `${environment.endpoint}${encodeURIComponent(data.movieName)}`;
    return this.httpClient.get<any>(apiUrl);
  }

  private searchResultSubject = new BehaviorSubject<any>(null);
  searchResult$ = this.searchResultSubject.asObservable();

  setSearchResult(result: any) {
    this.searchResultSubject.next(result);
  }

  //getMovieDetails
  getMovieDetails(data: any): Observable<any> {
    const apiUrl = `${environment.TitleEndpoint}${encodeURIComponent(data)}`;
    return this.httpClient.get<any>(apiUrl);
  }

  //getMovieReviews
  getMovieReviews(data: any): Observable<any> {
    const apiUrl = `${environment.ReviewsEndpoint}${encodeURIComponent(data)}`;
    return this.httpClient.get<any>(apiUrl);
  }

  //getActorDetails
  getActorDetails(data: any): Observable<any> {
    const apiUrl = `${environment.ActorEndpoint}${encodeURIComponent(data)}`;
    return this.httpClient.get<any>(apiUrl);
  }

  // getMostPopularMovies
  getMostPopularMovies(): Observable<any> {
    const apiUrl = `${environment.MoviesEndpoint}`;
    return this.httpClient.get<any>(apiUrl);
  }

  // getAllMovies
  getAllMovies(): Observable<any> {
    const apiUrl = `${environment.AllMoviesEndpoint}`;
    return this.httpClient.get<any>(apiUrl);
  }


}

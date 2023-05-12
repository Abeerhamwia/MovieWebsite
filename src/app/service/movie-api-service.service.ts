import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  public keySubject  = new Subject<KeyboardEvent>()
  constructor(private httpClient: HttpClient) { }

  //getSearchMovie(data: any): Observable<any> {
   // console.log(data, 'movie#');
    //return this.httpClient.get<any>(environment.endpoint + data.search);
  //}

  private baseUrl = 'https://imdb8.p.rapidapi.com';
  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'cb147151damshfa9df4f69296b05p164525jsn2f90d62d252d',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    })
  };
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

}

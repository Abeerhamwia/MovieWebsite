import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(private router: Router,private httpService:MovieApiServiceService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  
  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value,'searchform#');
    this.httpService.getSearchMovie(this.searchForm.value).subscribe((result) =>{
      console.log(result,'searchmovie#');
      this.httpService.setSearchResult(result.results); // set the search result data in the service
      this.router.navigate(['/search']); // navigate to the search component
    });
  }
}



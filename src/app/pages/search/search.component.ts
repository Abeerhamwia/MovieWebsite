import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private fb: FormBuilder, private service: MovieApiServiceService) {}

  searchResult: any;

  ngOnInit(): void {
    this.service.searchResult$.subscribe((result) => {
      this.searchResult = result;
    });
  }

  
  
}

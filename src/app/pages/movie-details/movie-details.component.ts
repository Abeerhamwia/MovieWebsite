import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  getMovieDetailResult:any;
  getMovieReviewResult:any;
  showMore = false;
  
  constructor(private route: ActivatedRoute, 
    private service: MovieApiServiceService) {}
    
  
    ngOnInit(): void {
      let getParamId = this.route.snapshot.paramMap.get('id');
      console.log(getParamId, 'getparamid#');
  
      this.getMovie(getParamId);
      this.getMovieReport(getParamId);
      
    }
  
  
    getMovie(id:any) {
      this.service.getMovieDetails(id).subscribe((result)=>{
        console.log(result,'getmoviedetails');
        this.getMovieDetailResult = result;
      });
    }
    getMovieReport(id:any) {
    this.service.getMovieReviews(id).subscribe((result)=>{
      console.log(result,'movieReport#');
      this.getMovieReviewResult = result.report;
    });
  }


  toggleShowMore() {
    this.showMore = !this.showMore;
  }
    

}

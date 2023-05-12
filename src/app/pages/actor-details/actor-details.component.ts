import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit{

  getActorDetailResult:any;

  constructor(private route: ActivatedRoute, 
    private service: MovieApiServiceService) {}

  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');
      console.log(getParamId, 'getparamid#');
  
      this.getActor(getParamId);
  }

  getActor(id:any) {
    this.service.getActorDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedetails');
      this.getActorDetailResult = result;
    });
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { ActorDetailsComponent } from './pages/actor-details/actor-details.component';

const routes: Routes = [
  {path:'',component:MoviesComponent},
  {path:'search',component:SearchComponent},
  {path:'Movie-content/:id',component:MovieDetailsComponent},
  {path:'actor/:id',component:ActorDetailsComponent},
  {path:'movie',component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

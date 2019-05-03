import { Component } from '@angular/core';
import { Api } from '../services/api.service';
import { Logger } from '../services/logger.service';

interface Movie {
  vote_average: number; 
  title: string;
  overview: string;
  release_date: string;
}


interface ApiData {
  results: Movie[];

}


@Component({
  selector: 'searchCriteria',
  templateUrl: './searchCriteria.component.html',
  styleUrls: [],
  providers: [Api, Logger]
})
export class searchCriteriaComponent {
  list: object[];
  errorMessage: string;
    constructor(private api: Api) {}

    getAllMovies = () => {
      
        this.api.getMovies().subscribe(
          (data: ApiData) => {
      
          this.list = data.results;
          console.log(data.results);

        },
      
      );
       
};
}

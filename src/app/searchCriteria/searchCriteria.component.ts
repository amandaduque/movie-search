import { Component } from '@angular/core';
import { Api } from '../services/api.service';

export interface Movie {
  poster_path: string,
  vote_average: number,
  title: string,
  overview: string,
  release_date: string,
}

interface ApiData {
  results: Movie[]
}

interface PopularSelect {
  name: string,
  value: string
}


@Component({
  selector: 'searchCriteria',
  templateUrl: './searchCriteria.component.html',
  styleUrls: ['./searchCriteria.component.css'],
  providers: [Api]
})

export class searchCriteriaComponent {
  list: Movie[];
  errorMessage: string;
  popValue: string;
  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getMovies().subscribe(
      (data: ApiData) => {
        this.list = data.results;
      },
    );
  };

  getPopValue = (event: any) => {
    this.popValue = event.target.value;
  }

  getPopular = () => {
     if (this.popValue === 'least') {
      this.api.getLeastPopular().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
     }
     if (this.popValue === 'most') {
      this.api.getMostPopular().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
     }
  }
  
}

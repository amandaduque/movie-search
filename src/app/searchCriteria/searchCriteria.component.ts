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
  rateValue: string;

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
  
  getRateValue = (event: any) => {
    this.rateValue = event.target.value;
  }

  getRating = () => {
    if (this.rateValue === 'rate1') {
      this.api.getrate1().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate2') {
      this.api.getrate2().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate3') {
      this.api.getrate3().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate4') {
      this.api.getrate4().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate5') {
      this.api.getrate5().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate6') {
      this.api.getrate6().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate7') {
      this.api.getrate7().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate8') {
      this.api.getrate8().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
    if (this.rateValue === 'rate9') {
      this.api.getrate9().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          console.log(this.list);
        },
      );
    }
  }
}

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

@Component({
  selector: 'searchCriteria',
  templateUrl: './searchCriteria.component.html',
  styleUrls: ['./searchCriteria.component.css'],
  providers: [Api]
})

export class searchCriteriaComponent {
  list: Movie[];
  watchlist: Movie[] = [];
  movie: Movie;
  errorMessage: string;
  popValue: string = 'default';
  genreCatagory: string = 'default';
  lastSearched: string;
  constructor(private api: Api) {}

  watchList = ($event) => {
    this.movie = $event;
    this.watchlist.unshift(this.movie);
    console.log(this.watchlist);
  }

  ngOnInit() {
    this.api.getMovies().subscribe(
      (data: ApiData) => {
        this.list = data.results;
      },
    );
  };

  getGenreCatagory = (event: any) => {
    this.genreCatagory = event.target.value;
  }

  getGenre = () => {
    if (this.genreCatagory === 'action'){
      this.api.getAction().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Action";
          console.log(this.list)
        }
      );
    }


    if (this.genreCatagory === 'adventure'){
      this.api.getAdventure().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Adventure";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'animation'){
      this.api.getAnimation().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Animated";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'comedy'){
      this.api.getComedy().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Comedy";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'crime'){
      this.api.getCrime().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Crime";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'documentary'){
      this.api.getDocumentary().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Documentary";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'drama'){
      this.api.getDrama().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Drama";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'family'){
      this.api.getFamily().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Family";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'fantasy'){
      this.api.getFantasy().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Fantasy";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'history'){
      this.api.getHistory().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Historical";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'horror'){
      this.api.getHorror().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Horror";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'music'){
      this.api.getMusic().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Music";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'mystery'){
      this.api.getMystery().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Mystery";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'romance'){
      this.api.getRomance().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Romantic";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'science'){
      this.api.getScience().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Sci-Fi";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'tv'){
      this.api.getTV().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Made for TV";
          console.log(this.list)
        }
      );
    }

        
    if (this.genreCatagory === 'thriller'){
      this.api.getThriller().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Thriller";
          console.log(this.list)
        }
      );
    }
        
    if (this.genreCatagory === 'war'){
      this.api.getWar().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "War";
          console.log(this.list)
        }
      );
    }

    
    if (this.genreCatagory === 'western'){
      this.api.getWestern().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Western";
          console.log(this.list)
        }
      );
    }

  };

  getPopValue = (event: any) => {
    this.popValue = event.target.value;
  }

  getPopular = () => {
     if (this.popValue === 'least') {
      this.api.getLeastPopular().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Least Popular";
          console.log(this.list);
        },
      );
     }
     if (this.popValue === 'most') {
      this.api.getMostPopular().subscribe(
        (data: ApiData) => {
          this.list = data.results;
          this.lastSearched = "Most Popular";
          console.log(this.list);
        },
      );
     }
  }

  clear = () => {
    this.popValue = 'default';
    this.genreCatagory = 'default';
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}

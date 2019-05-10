import { Component, Input, Output, OnInit } from '@angular/core';
import { Movie } from '../searchCriteria/searchCriteria.component'
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
  selector: 'movieList',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css']
})

export class movieListComponent {
    title = "Movie List";
    watchList: Movie[];
    @Input() movie: Movie;
    watchlist: boolean = false;
    urlFill: string = 'https://image.tmdb.org/t/p/w342';
    constructor(private api: Api) {}

    ngOnInit() {
      this.api.watchListArray.subscribe(list => this.watchList = list);
    }
    
    watchlistThis = () => {
      this.watchlist = !this.watchlist;
      this.watchList.unshift(this.movie);
      this.api.addMovie(this.watchList)
      console.log(this.watchList);
    }

    getUrl = () => {
      if (this.movie.poster_path === null) {
        return '../assets/pic-filler.png';
      } else {
        return `${this.urlFill}${this.movie.poster_path}`;
      }
    }
}
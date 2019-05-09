import { Component, Input, Output } from '@angular/core';
import { Movie } from '../searchCriteria/searchCriteria.component'

export interface Poster {
  base_url: string;
  poster_size: string;
}

@Component({
  selector: 'movieList',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css']
})
export class movieListComponent {
    title = "Movie List";
    @Input() movie: Movie;
    watchlist: boolean = false;
    urlFill: string = 'https://image.tmdb.org/t/p/w342';
    
    watchlistThis = () => {
      this.watchlist = !this.watchlist;
    }

    getUrl = () => {
      if (this.movie.poster_path === null) {
        return '../assets/pic-filler.png';
      } else {
        return `${this.urlFill}${this.movie.poster_path}`;
      }
    }
}

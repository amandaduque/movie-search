import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../searchCriteria/searchCriteria.component'

@Component({
  selector: 'movieList',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css']
})
export class movieListComponent {
    title = "Movie List";
    @Input() movie: Movie;
    @Output() watchlisted = new EventEmitter<Movie>();

    watchlist: boolean = false;
    urlFill: string = 'https://image.tmdb.org/t/p/w342';
    
    watchlistThis = () => {
      this.watchlist = !this.watchlist;
      const movie = this.movie;
      this.watchlisted.emit(movie);
    }

    getUrl = () => {
      if (this.movie.poster_path === null) {
        return '../assets/pic-filler.png';
      } else {
        return `${this.urlFill}${this.movie.poster_path}`;
      }
    }
}

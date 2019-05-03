import { Component, Input } from '@angular/core';
import { Movie } from '../searchCriteria/searchCriteria.component'

@Component({
  selector: 'movieList',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css']
})
export class movieListComponent {
    title = "Movie List";
    @Input() movie: Movie;
    watchlist: boolean = false;
    urlFill: object = { base_url: 'https://image.tmdb.org/t/p/', poster_size: 'w342' };
    watchlistThis = () => {
      this.watchlist = !this.watchlist;
    }
}

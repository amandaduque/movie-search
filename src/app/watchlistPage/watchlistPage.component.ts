
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../searchCriteria/searchCriteria.component';
import { Api } from '../services/api.service';

@Component({
  selector: 'watchlistPage',
  templateUrl: './watchlistPage.component.html',
  styleUrls: ['./watchlistPage.component.css']
})

export class watchlistPageComponent implements OnInit {
  title: 'Watchlist';
  errorMessage: string;
  list: string;
  watchList: Movie[]; 
  urlFill: string = 'https://image.tmdb.org/t/p/w342';

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.watchListArray.subscribe(list => this.watchList = list);
  }

  getUrl = (i) => {
    if (this.watchList[i].poster_path === null) {
      return '../assets/pic-filler.png';
    } else {
      return `${this.urlFill}${this.watchList[i].poster_path}`;
    }
  };

  watchlistRemove = (i) => {
    this.watchList.splice(i, 1);
  }
}

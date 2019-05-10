import { Component, Input, OnInit } from '@angular/core';
import { movieListComponent } from '../movieList/movieList.component';
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

watchList:any[]; 
constructor(private api: Api) {}
ngOnInit() {
  this.api.watchListArray.subscribe(list => this.watchList = list);
}

}

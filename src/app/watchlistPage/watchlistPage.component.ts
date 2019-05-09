import { Component, Input } from '@angular/core';
import { Movie } from '../searchCriteria/searchCriteria.component'

@Component({
  selector: 'watchlistPage',
  templateUrl: './watchlistPage.component.html',
  styleUrls: ['./watchlistPage.component.css']
})
export class watchlistPageComponent {
  title: 'Watchlist';
}

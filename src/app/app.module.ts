import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { searchCriteriaComponent } from './searchCriteria/searchCriteria.component';
import { watchlistPageComponent } from './watchlistPage/watchlistPage.component';
import { movieListComponent } from './movieList/movieList.component';
import { Api } from './services/api.service';

const appRoutes: Routes = [
  {path: '', component: searchCriteriaComponent},
  {path: 'watchlist', component: watchlistPageComponent}
]

@NgModule({
  declarations: [
    AppComponent, searchCriteriaComponent, watchlistPageComponent, movieListComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }

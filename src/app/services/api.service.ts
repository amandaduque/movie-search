import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class Api {
    apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&page=1';
    apiHighLow = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    apiLowHigh = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1';
    
    private _watchListArray = new BehaviorSubject([]);
    watchListArray = this._watchListArray.asObservable();

    constructor(private http: HttpClient) {}

    getMovies = () => this.http.get(this.apiURL);
    getMostPopular = () => this.http.get(this.apiHighLow);
    getLeastPopular = () => this.http.get(this.apiLowHigh);

    addMovie = newList => this._watchListArray.next(newList);
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
    apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&page=1';
    constructor(private http: HttpClient) {}

    getMovies = () => this.http.get(this.apiURL);
    
}


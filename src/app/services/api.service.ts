import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
    apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&page=1';
    apiHighLow = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    apiLowHigh = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1';
    apiRating1 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=1';
    apiRating2 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=2';
    apiRating3 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=3';
    apiRating4 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=4';
    apiRating5 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=5';
    apiRating6 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=6';
    apiRating7 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=7';
    apiRating8 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=8';
    apiRating9 = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=9';



    constructor(private http: HttpClient) {}

    getMovies = () => this.http.get(this.apiURL);
    getMostPopular = () => this.http.get(this.apiHighLow);
    getLeastPopular = () => this.http.get(this.apiLowHigh);
    getrate1 = () => this.http.get(this.apiRating1);
    getrate2 = () => this.http.get(this.apiRating2);
    getrate3 = () => this.http.get(this.apiRating3);
    getrate4 = () => this.http.get(this.apiRating4);
    getrate5 = () => this.http.get(this.apiRating5);
    getrate6 = () => this.http.get(this.apiRating6);
    getrate7 = () => this.http.get(this.apiRating7);
    getrate8 = () => this.http.get(this.apiRating8);
    getrate9 = () => this.http.get(this.apiRating9);
    
}

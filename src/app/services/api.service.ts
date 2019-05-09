import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
    apiAction = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28';
    apiAdventure = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12';
    apiAnimation = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16';
    apiComedy = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35';
    apiCrime = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80';
    apiDocumentary = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99';
    apiDrama = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18';
    apiFamily = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751';
    apiFantasy = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14';
    apiHistory = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36';
    apiHorror = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27';
    apiMusic = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10402';
    apiMystery = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648';
    apiRomance = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749';
    apiScience = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878';
    apiTV = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770';
    apiThriller = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53';
    apiWar = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752';
    apiWestern = 'https://api.themoviedb.org/3/discover/movie?api_key=7213cee51893c8ccbb54b6ed9c49007b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37';
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

    getAction = () => this.http.get(this.apiAction);
    getAdventure = () => this.http.get(this.apiAdventure);
    getAnimation = () => this.http.get(this.apiAnimation);
    getComedy = () => this.http.get(this.apiComedy);
    getCrime = () => this.http.get(this.apiCrime);
    getDocumentary = () => this.http.get(this.apiDocumentary);
    getDrama = () => this.http.get(this.apiDrama);
    getFamily = () => this.http.get(this.apiFamily);
    getFantasy = () => this.http.get(this.apiFantasy);
    getHistory = () => this.http.get(this.apiHistory);
    getHorror = () => this.http.get(this.apiHorror);
    getMusic = () => this.http.get(this.apiMusic);
    getMystery = () => this.http.get(this.apiMystery);
    getRomance = () => this.http.get(this.apiRomance);
    getScience = () => this.http.get(this.apiScience);
    getTV = () => this.http.get(this.apiTV);
    getThriller = () => this.http.get(this.apiThriller);
    getWar = () => this.http.get(this.apiWar);
    getWestern = () => this.http.get(this.apiWestern);

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

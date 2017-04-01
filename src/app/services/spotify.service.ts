import { Http, Headers } from "@angular/http"
import { Injectable } from '@angular/core';
import "rxjs/Rx";

@Injectable()
export class SpotifyService {

  private searchUrl: string;

  constructor(private http: Http) {
  }

  searchMusic(str: string, type="artist") {
    // this.searchUrl="https://api.spotify.com/v1/search?query=greenday&offset=0&limit=20&type=artist"
    this.searchUrl="https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=GB"
    return this.http.get(this.searchUrl)
    .map(res => res.json());
  }

}

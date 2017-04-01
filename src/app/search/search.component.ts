import { Component } from '@angular/core';
import { SpotifyService } from "../services/spotify.service";
import { Artist } from "./artist";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private searchString: string;
  private searchResults: Artist[]

  constructor(private spotifyService: SpotifyService) { }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchString)
      .subscribe(res => {
        this.searchResults = res.artists.items
      })
  }

}

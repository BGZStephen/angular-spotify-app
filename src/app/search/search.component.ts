import { Component } from '@angular/core';
import { SpotifyService } from "../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private searchString: string;

  constructor(private spotifyService: SpotifyService) { }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchString)
      .subscribe(res => {
        console.log(res.artists.items)
      })
  }

}

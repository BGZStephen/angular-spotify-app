import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { SpotifyService } from '../services/spotify.service';
import { Artist } from "../search/artist"
import { Album } from "../search/album"
import "rxjs/Rx";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((id) => {
      this.spotifyService.searchArtist(id)
      .subscribe(artist => {
        this.artist = artist
      })
      this.spotifyService.searchAlbums(id)
      .subscribe(albums => {
        this.albums = albums.items
      })
    })
  }

}

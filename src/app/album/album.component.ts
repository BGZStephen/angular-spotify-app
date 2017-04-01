import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from "../search/artist"
import { Album } from "../search/album"
import "rxjs/Rx";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album[];

  constructor(private SpotifyService: SpotifyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.SpotifyService.searchAlbum(id)
        .subscribe(album => {
          this.album = album;
        })
      })
  }

}

import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Track } from '../../../Track';
import { Playlist } from '../../../Playlist';
import { SpotifyService } from '../services/spotify.service';
import { window } from "rxjs/operator/window";
import { DomSanitizer } from '@angular/platform-browser';

declare var swal: any;



@Component({

    moduleId: module.id,
    selector: 'playlist',
    templateUrl: 'playlist.component.html',
    styleUrls: ['playlist.component.scss']

})

export class PlaylistComponent implements OnInit {
    tracks: Track[];
    
    track: Track;
    

    constructor(private _spotifyService: SpotifyService, public sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.getTracks();
        this.cdr.detectChanges();
    }

    getTracks(): void {
        this._spotifyService.getTracks()
            .subscribe(tracks => this.tracks = tracks);
    }

    editPlaylist(): void {
        let button = document.createElement("button");
        button.id = "addTracks";
        button.innerHTML = "Add more Tracks";
        let anchor = document.createElement("a");
        let br = document.createElement("br");
        var att = document.createAttribute("routerLink");
        att.value = "/search";
        anchor.setAttributeNode(att);
        button.appendChild(anchor);
        document.getElementById("playlist").appendChild(button);

    }
}
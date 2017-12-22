import { Component, OnInit } from "@angular/core";
import { Track } from '../../../Track';
import { Playlist } from '../../../Playlist';
import { SpotifyService } from '../services/spotify.service';
import { window } from "rxjs/operator/window";
import { Location } from '@angular/common';

declare var swal: any;


@Component({

    moduleId: module.id,
    selector: 'editplaylist',
    templateUrl: 'editplaylist.component.html'

})

export class EditPlaylistComponent implements OnInit {
    tracks: Track[];          
    track: Track;

    constructor(private _spotifyService: SpotifyService, private location: Location) { }

    ngOnInit() {
        this.getTracks();



    }

    
    getTracks(): void {
        this._spotifyService.getTracks()
            .subscribe(tracks => this.tracks = tracks);
    }

    // Single track delete from playlist function
    deleteTrack(track: Track): void {
        this.tracks = this.tracks.filter(t => t !== track);
        this._spotifyService.deleteTrack(track).subscribe();

        swal({
            type: 'error',
            title: 'Track deleted',
            showConfirmButton: false,
            timer: 1900
        }).catch(function (timeout) {
            if (timeout === 'timer') {
            }
        });

    }

    // Delete Playlist fucntion
    deletePlaylist(): void {
        for (let i = this.tracks.length - 1; i > 0; i--) {
            this._spotifyService.deleteTrack(this.tracks[i]).subscribe();
            this.tracks.pop();

        }

        // Sweetalert2 for displaying popup for playlist deleted successfully
        swal({
            type: 'error',
            title: 'Your Playlist has been deleted',
            showConfirmButton: false,
            timer: 1900
        }).catch(function (timeout) {
            if (timeout === 'timer') {
            }
        });
        this.goBack();

    }

    // Back functionality using Angular Location
    goBack(): void {
        this.location.back();
    }
}
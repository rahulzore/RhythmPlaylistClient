import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Artist } from "../../../Artist";
import { Album } from "../../../Album";
import { ActivatedRoute, Params } from "@angular/router";
import { Track } from '../../../Track';

declare var swal: any;


@Component({

    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'

})

export class AlbumComponent {
    id: string;
    album: Album[];
    tracks: Track[]=[];

    

    constructor(private _spotifyservice: SpotifyService, private _route: ActivatedRoute) { }


    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyservice.getToken()
                    .subscribe(data => {
                        this._spotifyservice.getAlbum(id, data.access_token)
                            .subscribe(album => {
                                this.album = album;

                            })
                    })
            })

        
        
       
        
    }


    

    add(trackID: string):void{
       
        this._spotifyservice.addTrack({ trackID } as Track)
        .subscribe(track => {
            this.tracks.push(track);
        });
        console.log(this.tracks);
    }

    
}
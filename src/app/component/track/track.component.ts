import { Component , OnInit } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Artist } from "../../../Artist";
import { Album } from "../../../Album";
import { Track } from "../../../Track";
import { ActivatedRoute , Params } from "@angular/router";
@Component({

    moduleId: module.id,
    selector: 'track',
    templateUrl: 'track.component.html',

})

export class TrackComponent implements OnInit{
    
    id:string;
    artist:Artist[];
    albums:Album[];
    track:Track[];
    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute){

    }
    ngOnInit(){
        this._route.params
          .map(params => params['id'])
          .subscribe((id) => { 
             this._spotifyService.getToken()
              .subscribe(data => {
                this._spotifyService.getTrack(id, data.access_token)
                 .subscribe(track=> {
                   this.track = track;
                })
               
                })
          })
    }
}
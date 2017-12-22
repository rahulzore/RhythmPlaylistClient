import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { SpotifyService } from "../services/spotify.service";
import { Track } from '../../../Track';

@Component({
    selector: 'userprofile',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.component.scss']
  })
  export class UserProfileComponent implements OnInit {
    
      tracks: Track[];
      user: SocialUser;
    
      constructor(private authService: AuthService, private _spotifyService : SpotifyService) { }
    
      ngOnInit() {
        this.authService.authState.subscribe((user) => {
          this.user = user;
        });
        this.getTracks();
    }

    getTracks():void{
      this._spotifyService.getTracks()
      .subscribe(tracks => this.tracks = tracks);
     
  }
}
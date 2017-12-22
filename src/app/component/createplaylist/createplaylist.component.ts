import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { SpotifyService } from "../services/spotify.service";
import { Track } from '../../../Track';

declare var swal: any;


@Component({
    
        moduleId: module.id,
        selector: 'createplaylist',
        templateUrl: 'createplaylist.component.html',
        styleUrls: ['createplaylist.component.scss']
    
    })

export class CreatePlaylistComponent implements OnInit{

    user: SocialUser;
    
    
        constructor(private authService: AuthService,private _spotifyservice: SpotifyService) { }
        ngOnInit() {
            this.authService.authState.subscribe((user) => {
                this.user = user;
            });

            
        }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { SpotifyService } from '../services/spotify.service';
import { Track } from '../../../Track';

declare var swal: any;


@Component({

    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls : ['navbar.component.scss']
})



export class NavbarComponent implements OnInit {

    user: SocialUser;
    

    constructor(private authService: AuthService, private _spotifyService: SpotifyService) { }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
        });
        
    }

    // Sign in function with Google Login Api and Angular Social Login Provider
    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    // Sign in function with Facebook Login Api and Angular Social Login Provider
    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    // Signout function using Angular Social Login Provider
    signOut(): void {
       
        this.authService.signOut();

        // Sweetalert2 function to show popup for logout
        swal({
            type: 'error',
            title: 'You have been Logged Out',
            showConfirmButton: false,
            timer: 1800
          }).catch(function (timeout) {
            if (timeout === 'timer') {
            }
        });

        
    }

}
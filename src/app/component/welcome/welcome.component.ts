import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
    
        moduleId: module.id,
        selector: 'welcome',
        templateUrl: 'welcome.component.html',
        styleUrls: ['welcome.component.scss']
    
    })

export class WelcomeComponent implements OnInit{

    user: SocialUser;
    
        constructor(private authService: AuthService) { }
        ngOnInit() {
            this.authService.authState.subscribe((user) => {
                this.user = user;
            });
        }
}
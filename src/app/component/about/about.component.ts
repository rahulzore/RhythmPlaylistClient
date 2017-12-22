import { Component, OnInit } from "@angular/core";
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

declare var swal: any;


@Component({

    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']

})

export class AboutComponent implements OnInit {

    user: SocialUser;

    constructor(private authService: AuthService) { }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
        });

    }
}
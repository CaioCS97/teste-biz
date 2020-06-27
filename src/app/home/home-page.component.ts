import { Component } from '@angular/core';

// import { Person } from '@app/_models';
import { User } from '../_models/';
import { LoginService } from '../_services';

@Component({ templateUrl: 'home-page.component.html' })
export class HomePageComponent {
    user: User;

    constructor(private loginService: LoginService) {
        this.user = this.loginService.userValue;
    }
}

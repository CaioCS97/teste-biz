import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router,
        private loginService: LoginService
    ) {
        if (this.loginService.userValue) {
            this.router.navigate(['/']);
        }
    }
}

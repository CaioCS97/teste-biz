import { Component } from '@angular/core';

import { LoginService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: User;

  constructor(private loginService: LoginService) {
    this.loginService.user.subscribe(x => this.user = x);
  }

  public logout() {
    this.loginService.logout();
  }
}

import { Component } from '@angular/core';

import { Person } from '../_models/';
import { LoginService } from '../_services';

@Component({ templateUrl: 'home-page.component.html' })
export class HomePageComponent {
  public person: Person;

  constructor(private loginService: LoginService) {
    this.person = this.loginService.userValue.person;
  }
}

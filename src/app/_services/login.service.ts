import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  req: HttpRequest<any>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public loginEmail(email, password, grantType, platformId, partnerId) {
    return this.http
      .post<User>(`${environment.apiUrl}/authentication/Login`, {
        email,
        password,
        grantType,
        platformId,
        partnerId,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);

          return user;
        })
      );
  }

  public loginDocument(document, password, grantType, platformId, partnerId) {
    return this.http
      .post<User>(`${environment.apiUrl}/authentication/Login`, {
        document,
        password,
        grantType,
        platformId,
        partnerId,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);

          return user;
        })
      );
  }

  public logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }
}

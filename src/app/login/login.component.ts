import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { LoginService, AlertService } from '../_services';
import { LoginConstants, RegexConstants } from './../_helpers';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public document: string;
  public email: string;
  public grantType: string;
  public user: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.user = this.f.username.value;

    this.alertService.clear();

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    if (this.user.match(RegexConstants.EMAIL_REGEX)) {
      this.email = this.user;
      this.grantType = 'email';

      this.loginService
        .loginEmail(
          this.email,
          this.f.password.value,
          this.grantType,
          LoginConstants.PARTNER_ID,
          LoginConstants.PLATFORM_ID
        )
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate([this.returnUrl]);
          },
          (error) => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    } else if (this.user.match(RegexConstants.CPF_REGEX)) {
      this.document = this.user;
      this.grantType = 'cpf';

      this.loginService
        .loginDocument(
          this.document,
          this.f.password.value,
          this.grantType,
          LoginConstants.PARTNER_ID,
          LoginConstants.PARTNER_ID
        )
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate([this.returnUrl]);
          },
          (error) => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    } else {
      this.alertService.error('Favor inserir um usuário válido!');
      this.loading = false;
    }
  }
}

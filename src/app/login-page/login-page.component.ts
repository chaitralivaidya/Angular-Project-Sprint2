import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  users: User[];
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      console.log(this.users);
      for (let user of this.users) {
        if (
          user.userName === this.loginForm.controls.userName.value &&
          user.passWord === this.loginForm.controls.password.value
        ) {
          localStorage.setItem(
            'userName',
            this.loginForm.controls.userName.value
          );
          console.log(user);
          this.router.navigate(['/HomePage']);
        }
      }
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      userRole: ['', Validators.required],
    });
    this.loginService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { LoginService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  users: User[];
  user: User;
  receivedUsername : string = "";

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
      this.users.forEach((user) => {
        this.receivedUsername  = this.loginForm.controls.userName.value;
        console.log(user);
        console.log(user.id, this.receivedUsername);
        if (
          user.id === this.receivedUsername &&
          user.passWord === this.loginForm.controls.password.value
        ) {

          localStorage.setItem(
            'userName',
            this.loginForm.controls.userName.value
          );
          localStorage.removeItem('loggedUserRole');
          localStorage.setItem('loggedUserRole', user.userRole.toString());
          console.log(user);
          if(user.userRole === 3)
          {this.router.navigate(['/navbaradmin']);}

          else  if(user.userRole === 2)
          {this.router.navigate(['/']);}

          else if(user.userRole === 1)
          {this.router.navigate(['/']);}

          else{
            alert('Userrole of the user not present')
          }
          
        }

      }
      )}
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      // userRole: ['', Validators.required],
    });
    this.loginService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}

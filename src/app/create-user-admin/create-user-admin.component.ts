import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { LoginService } from '../services/user.service';

@Component({
  selector: 'app-create-user-admin',
  templateUrl: './create-user-admin.component.html',
  styleUrls: ['./create-user-admin.component.css'],
})
export class CreateUserAdminComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
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
    } else {
      if(localStorage.getItem("userName") !=null){	
      this.loginService.createUser(this.loginForm.value).subscribe((data) => {
        localStorage.setItem('loggedUserName', this.loginForm.controls.id.value)
        console.log(data)
        alert('User Added successfully');
      });
      this.router.navigate(['/createAccount'])
    }
    else{
      this.router.navigate(['/users'])
    }
  }
  
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
      userRole: ['', Validators.required],
    });
  }
}

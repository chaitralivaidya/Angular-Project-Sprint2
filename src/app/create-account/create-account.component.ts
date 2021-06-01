import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../models/Account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  createAccount: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  exists: boolean = false;
  account: Account;
  accounts: Account[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) {}

  onSubmit() {
    this.submitted = true;
    console.log('hello');

    if (this.createAccount.invalid) {
      console.log('invalid');
      return;
    } else {
      if (localStorage.getItem('userName') != null) {
        for (let account of this.accounts) {
          if (
            account.accountNumber ==
            this.createAccount.controls.accountNumber.value
          ) {
            alert('Account number already exists!!');
            this.exists = true;
          }
        }
        if (!this.exists) {
          this.accountService
            .createAccount(this.createAccount.value)
            .subscribe((data) => {
              alert('Account Added successfully');
              this.router.navigate(['/navbaradmin/createpolicy']);
            });
        }
      } else {
        this.router.navigate(['/users']);
      }
    }
  }

  ngOnInit() {
    this.createAccount = this.formBuilder.group({
      id: ['', Validators.required],
      accountNumber: ['', Validators.required],
    });
    this.accountService.getUsers().subscribe((response) => {
      this.accounts = response;
    });
  }
}

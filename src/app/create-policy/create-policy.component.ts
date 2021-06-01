import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  policyForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  account: Account;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private policyService: PolicyService
  ) {}

  onSubmit() {
    this.submitted = true;
    console.log("hello")
console.log(this.policyForm.controls.policyNumber.invalid)
console.log(this.policyForm.controls.policyPremium.invalid)
console.log(this.policyForm.controls.accountNumber.invalid)
console.log(this.policyForm.controls.id.invalid)
console.log(this.policyForm.controls.createdBy.invalid)

    if (this.policyForm.invalid) {
      console.log('invalid')
      return;
    } 
    else {
      if(localStorage.getItem("userName") !=null){	
      console.log(this.policyForm.value)
      this.policyService.createPolicy(this.policyForm.value).subscribe((data) => {
        alert('Account Added successfully');
      });
      this.router.navigate(['navbaradmin/viewpolicyadmin'])
    }
    else{
      this.router.navigate(['/users'])
    }
  }
  }
  ngOnInit() {
    this.policyForm = this.formBuilder.group({
      policyNumber: ['', Validators.required],
      policyPremium: ['', Validators.required],
      accountNumber: ['', Validators.required],
      id: ['', Validators.required],
      createdBy: ['', Validators.required],
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimDetails } from '../models/ClaimDetails';
import { PolicyDetails } from '../models/PolicyDetails';
import { Questions } from '../models/Questions';
import { ClaimService } from '../services/claim.service';
import { PolicyService } from '../services/policy.service';
import { PolicydetailsService } from '../services/policydetails.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  storedPolicyNumber :any = localStorage.getItem('policyNumber') || 0;
  claimDetails = localStorage.getItem('claim') ;
  claimDetailsTemp : any;
  claimAmount:number =5000;
  policDetails : PolicyDetails;

  questionAnswerForm: FormGroup;
  submitted : Boolean =false;
  invalidLogin: boolean = false;
  questions :Questions[];

  constructor(
    private ar:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private questionService: QuestionService,
    private claimService : ClaimService,
    private policyDetailsService :PolicydetailsService

  ) {}

  onSubmit() {
    this.submitted = true;


    if (this.questionAnswerForm.invalid) {
      console.log('invalid')
      return;
    } 
    else {
      if(localStorage.getItem("userName") !=null){
        console.log('form - ')	


      if(this.questionAnswerForm.controls.answer1.value === "1"){
        this.claimAmount += 500;
  
      }
      else if(this.questionAnswerForm.controls.answer1.value === "2"){
        this.claimAmount += 200;
      }
      console.log(this.claimAmount)
      if(this.storedPolicyNumber !== 0){
      this.policDetails ={
        id:parseInt(this.storedPolicyNumber),
        question1:"what is the vehicle type",
        question2:"what is the age of the vehicle",
        question3:"what is the vehicle color",
        answer1: this.questionAnswerForm.controls.answer1.value,
        answer2: this.questionAnswerForm.controls.answer2.value,
        answer3: this.questionAnswerForm.controls.answer3.value
      }
      console.log('yes claimdetails = ' )
      console.log(JSON.stringify(this.claimDetails))
      this.policyDetailsService.createPolicyDetails(this.policDetails)
      .subscribe(data=>{
        alert('Question answers added successfully')
        this.claimService.getClaimByNumber(parseInt(this.storedPolicyNumber)
        ).subscribe(data=>{
            data.claimAmount = this.claimAmount;
            console.log('\n\n\n\n')
            console.log(data)
            this.claimService.updateClaim(data, parseInt(this.storedPolicyNumber));
            alert('Claim added successfully!')
        })
      }, error=>{this.router.navigate(['/users'])})
  
  
    }else{
      alert("Policy not present")
    }
    // this.claimDetails.claimAmount = this.claimAmount
      // this.claimService.createClaim(this.claimDetails).subscribe((data) => {
      //   alert('Claim Created successfully');
      // });
      
      // this.router.navigate(['/createclaim'])
    }
    else{
      this.router.navigate(['/users']);
    }
  }
  }

  ngOnInit() {
    this.questionAnswerForm = this.formBuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      // question1: ['', Validators.required],


    });
    this.questionService.getQuestions().subscribe(data=>{
      this.questions = data
    })
    // this.claimDetailsTemp = JSON.parse(localStorage['claim'] || '');
   
    this.claimDetailsTemp = this.ar.snapshot.params['claim'];
    console.log('from ng init => claim object => \n')
    console.log(this.claimDetailsTemp)
    console.log(this.storedPolicyNumber);
  }




}

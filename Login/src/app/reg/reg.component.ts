import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../userAccount';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  title = 'registration page';
  submitted = false;
  response: any;
  userAccount: UserAccount = new UserAccount();
  constructor(private fb: FormBuilder, private route: Router, private userService: UserService) {}
  regForm: FormGroup;
  ngOnInit() {

/*     email: string;
    password: string;
    passwordConfirm: string;
    userName: string;
    mobileNo: number;
 */

    this.regForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3) ]],
      /* email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')] ], */
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9]\\d{9}')]],
      password: ['', [ Validators.required, Validators.maxLength(15), Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')] ],
        passwordConfirm: ['', Validators.required ]
   });
 }

 /* get f() { return this.regForm.controls; } */




 onRegiter() {
this.submitted = true;
  console.log ( 'in register() method');
  console.log(this.userAccount);
  this.userService.createUser(this.userAccount)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response); });
    /*   this.route.navigateByUrl("login");
   this.userAccount = new UserAccount();
    console.log(this.userAccount); */


 }

 onLogin() {
  console.log(this.response.userName);
  this.route.navigateByUrl('login');

 }



  }



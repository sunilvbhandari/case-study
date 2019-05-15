import { Component, OnInit, Input } from '@angular/core';
import {GoogleLoginProvider, AuthService} from 'angularx-social-login';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAccount } from '../loginAccount';
import { UserService } from '../user.service';
import { UserAccount } from '../userAccount';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title: 'Login Page';



submitted = false;
 response: any ;
  constructor(private fb: FormBuilder, private route: Router, private userService: UserService, private authService: AuthService) { }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }

  
  
  loginForm: FormGroup;

  loginAccount: LoginAccount = new LoginAccount();
  userAccount: UserAccount = new UserAccount();
  ngOnInit() {
    this.loginForm = this.fb.group(
{
  email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
  password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]]

});
  }
  onLogin() {
    this.submitted = true;
    console.log('in login() method');
    console.log(this.loginAccount);
      this.userService.validateUser(this.loginAccount)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response); 
        this.route.navigateByUrl('home');

      });


      /* if (this.response) {
      } */
    // this.route.navigateByUrl("product");
     }
     onProduct(): any {


      this.route.navigateByUrl('');


     }
     onLoginPage() {

           this.route.navigateByUrl('home');
     }
}
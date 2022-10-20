import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private _service : RegistrationService ,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    console.log("hello")
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      } ,
      error => 
      {
        console.log("error occured")
      this.msg="enter valid credientials"
    }
      
    )
  }

  gotoRegistartion(){
    this._router.navigate(['/registration'])
  }


}

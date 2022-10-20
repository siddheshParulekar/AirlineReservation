import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private _service : RegistrationService ,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log("hello")
    this._service.RegisterUserFromRemote(this.user).subscribe(
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

}

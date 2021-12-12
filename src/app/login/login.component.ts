import { Component, OnInit } from '@angular/core';
import { FormsModule,Form,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userForm:FormGroup;
  emailpattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(private fb:FormBuilder, private userService:UserserviceService,private route:Router) { 
    this.userForm=fb.group({
      emailId:['',[Validators.required, Validators.pattern(this.emailpattern)]],
      password:['',Validators.required]
    })
  }

  ngOnInit() {
  }
  login(){
    let loginDetails={
      emailId:this.userForm.value.emailId,
      password:this.userForm.value.emailId,
    }
    this.userService.loginUser(loginDetails).subscribe(res =>
    {
      console.log(res);
    },error =>
    {
      console.log(error)
    })

  }
  SignUp(){
    this.route.navigateByUrl('registration')
  }

}

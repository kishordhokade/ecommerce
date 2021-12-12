import { Component, OnInit } from '@angular/core';
import { FormBuilder,Form,Validators,FormGroup,FormGroupDirective } from '@angular/forms';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  emailpattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userForm:FormGroup;
  passwordCheck=false;

  constructor(private fb:FormBuilder, private userService: UserserviceService) {
    this.userForm=fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',[Validators.required, Validators.pattern(this.emailpattern)]],
      password:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmpassword:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    })
   }

  ngOnInit() {
    this.createUser();
      }
  createUser(){
    if(this.userForm.value.password !== this.userForm.value.confirmpassword){
      this.passwordCheck=true;
      setTimeout(()=>{
        this.passwordCheck=false;
      },5000)
      return;
    }
    
    let user={
      firstname:this.userForm.value.firstname,
      lastname:this.userForm.value.lastname,
      emailid:this.userForm.value.emailid,
      password:this.userForm.value.password,
      confirmpassword:this.userForm.value.confirmpassword
    }
    // this.userService.registerUser(user).subscribe(res =>
    // {
    //   console.log(res);

    // },error =>{
    //   console.log(error)
    // })
    console.log(user)
   
} 
  

}

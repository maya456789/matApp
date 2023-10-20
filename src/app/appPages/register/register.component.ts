import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from 'src/app/appServices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupData:any;
  isFormSubmitted:any=false;


  constructor(private build:FormBuilder,private autheService: AuthService) {
    this.signupData=this.build.group({
      userName:['',Validators.required],
      userPass:['',Validators.compose([Validators.required,Validators.maxLength(8)])],
      email:['',Validators.compose([Validators.required,Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)])],
    })
   }

  ngOnInit(): void {
  }

  signupUser(Data:any){
   this.isFormSubmitted=true;
   this.autheService.register(Data).pipe(first()).subscribe((data: any)=>{
    console.log("Data rom BE:",data);
   })
  }

}

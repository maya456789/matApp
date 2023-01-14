import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AppserviceService } from 'src/app/appServices/appservice.service';
import { AuthService } from 'src/app/appServices/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formData:FormGroup;
  public isFormSubmitted:boolean=false;
  public uname:any;
  public pass:any;
  public obj:any;


  constructor(private fbuild:FormBuilder,private rout:Router,
    private authenticationService: AuthService,
    public appserviceService: AppserviceService) {

    this.formData=this.fbuild.group({
      userName:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      userPass:['',Validators.compose([Validators.required,Validators.maxLength(8)])],

    });
   }

  ngOnInit(): void {
  }


  checkUser(formData:any){
    this.isFormSubmitted=true;
    console.log(formData);
   /* console.log(formData.controls['userName'].value);*/
    console.log(formData.valid);
    this.uname=formData.controls['userName'].value;
    this.pass=formData.controls['userPass'].value;

    if(this.uname =='admin' && this.pass=='admin123'){
      alert('Login successful');
      let obj={uname:this.uname,pass:this.pass};
      sessionStorage.setItem("userDetails",JSON.stringify(obj));
     // localStorage.setItem("data","User Data");
     // window.location.href='home';
     this.rout.navigate(["dashboard"]);

     this.authenticationService
     .login(this.uname, this.pass)
     .pipe(first())
     .subscribe(
       (data) => {
        console.log('Response dt:',data);
           this.appserviceService
           .getUserData(data.userId)
           .pipe(first())
           .subscribe(
             (data) => {
               //this.isLoading = false;
               localStorage.setItem("currentUserData", JSON.stringify(data));
               this.authenticationService.currentUserDataSubject.next(data);
               setTimeout(() => {
               //  this.ifLoogedInRedirect();
               }, 50);
             },
             (error) => {
              // this.isLoading = false;
              // this.serverSideMessages = error;
             }
           );
       },
       (error) => {
       //  this.isLoading = false;
        // this.serverSideMessages = error;
       }
     );
    }
    else{
      alert('Login failed');
    }
  }
}

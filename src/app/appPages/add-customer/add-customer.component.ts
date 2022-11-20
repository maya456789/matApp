import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'; 
import { first } from 'rxjs';
import { CustomerService } from 'src/app/appServices/customer/customer.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerData:FormGroup; 

  Customer:any;

  constructor(private fbuild:FormBuilder,private customerService:CustomerService) {
    this.customerData=this.fbuild.group({
      customer_name:['',],
      customer_address:['',],
      customer_mobile:['',],
      credit_limit:['',]
    })
   }

  ngOnInit(): void {
  }

  public customerFormData(cData:any){
    this.customerService.addCustomer(cData.value).pipe(first()).subscribe(
      (resp)=>{
        this.Customer=resp;
        console.log("AddCustomer response::",resp);
      },err=>{ console.log(err);}
    )
   }
  }


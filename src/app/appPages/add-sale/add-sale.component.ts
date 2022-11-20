import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/appServices/product/product.service';

import { first } from 'rxjs';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {

  getProduct:any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().pipe(first()).subscribe(
      (resp)=>{
        this.getProduct=resp;
        console.log("Get Product response::",resp);
      },err=>{ console.log(err);}
    )
  }

  public saleProduct(pId:any){
      console.log("Select pid is :",pId);
     alert('product is buy');
      this.productService.deleteProduct(pId).pipe(first()).subscribe(
        (resp)=>{
          //this.getProduct=resp;
          console.log("Sale Product response::",resp);
        },err=>{ console.log(err);}
      )
  }
}

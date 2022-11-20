import { Component, OnInit } from '@angular/core';
import { products } from '../product';
import { first } from 'rxjs';
import { ProductService } from 'src/app/appServices/product/product.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  prod:any=[...products];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  public purchaseProduct(pData:any){
     console.log("Purchased product is :",pData);
     alert("Product is purchased");
     this.productService.addProduct(pData).pipe(first()).subscribe(
      (resp)=>{
       // this.Product=resp;
        console.log("AddProduct response::",resp);
      },err=>{ console.log(err);}
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'; 
import { first } from 'rxjs';
import { ProductService } from 'src/app/appServices/product/product.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 productData:FormGroup;
  
 Product:any;
  constructor(private fbuild:FormBuilder,private productService:ProductService) { 
    this.productData=this.fbuild.group({
      product_name:['',],
      product_unit:['',],
      product_category:['',],
      product_sale_price:['',],
      product_mrp:['',],
      product_description:['',]
    })
  }

  ngOnInit(): void {
  }

   public productFormData(pData:any){
     console.log("Product value:",pData.value);

     this.productService.addProduct(pData.value).pipe(first()).subscribe(
      (resp)=>{
        this.Product=resp;
        console.log("AddProduct response::",resp);
      },err=>{ console.log(err);}
    )
   }
}

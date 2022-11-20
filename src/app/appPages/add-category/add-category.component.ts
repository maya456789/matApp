import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ProductService } from 'src/app/appServices/product/product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryData:FormGroup;

  constructor(private fbuild:FormBuilder,private productService:ProductService) {
    this.categoryData=this.fbuild.group({
      
      category_type:['',],
      category_name:['',],
     
    })
   }

  ngOnInit(): void {
  }

  public categoryFormData(ctgData:any){
    console.log("Category value:",ctgData.value);

    this.productService.addCategory(ctgData.value).pipe(first()).subscribe(
     (resp)=>{
      // this.Product=resp;
       console.log("AddCategory response::",resp);
     },err=>{ console.log(err);}
   )
  }
}

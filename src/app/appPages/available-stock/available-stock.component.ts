import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/appServices/product/product.service';

import { first } from 'rxjs';

@Component({
  selector: 'app-available-stock',
  templateUrl: './available-stock.component.html',
  styleUrls: ['./available-stock.component.css']
})
export class AvailableStockComponent implements OnInit {

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

}

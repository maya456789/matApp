import { Component, OnInit } from '@angular/core';
import { ProductService } from '../appServices/product/product.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  storeAPI:any='';

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.cartProduct().pipe(first()).subscribe(
      res=>{
        console.log("FakeStoreApi is",res);
        this.storeAPI=res;
      },err=>{
        console.log(err);
      }
    )
  }

}

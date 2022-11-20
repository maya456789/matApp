import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public addProduct(formData:any):Observable<any>{
    return this.http.post(`${environment.API_AUTHENTICATEPRODUCT}`,formData)
    .pipe(
      map((product: any) => {
        return product;
      })
    );
    
  }

  public getProduct():Observable<any>{
    return this.http.get(`${environment.API_GET_PRODUCT}`).pipe(
      map((prod)=>{
         return prod;
      })
    )
  }

  public deleteProduct(prodId:any):Observable<any>{
    console.log("pid at server :",prodId);
   
    return this.http.post(`${environment.API_DELET_PRODUCT}`,{prodId}).pipe(
      map((resp)=>{
        return resp;
      })
    );
  }

  public addCategory(cData:any):Observable<any>{
    
    return this.http.post(`${environment.API_ADD_CATEGORY}`,cData).pipe(
      map((resp)=>{
        return resp;
      })
    );
  }

}

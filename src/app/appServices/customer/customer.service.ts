import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public addCustomer(formData:any):Observable<any>{
    return this.http.post(`${environment.API_ADD_CUSTOMER}`,formData)
    .pipe(
      map((product: any) => {
        return product;
      })
    );
    
  }
}

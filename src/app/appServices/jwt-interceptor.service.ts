import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    const currentUser = this.authenticationService.currentUserValue;
    const isApiUrl = request.url.startsWith(environment.API_BASE);

    if(isApiUrl){
          request=request.clone({
      setHeaders:{
        Authorization:`Bearer ${currentUser.accessToken}`
      }
    })
    }


    return next.handle(request);
  }
}

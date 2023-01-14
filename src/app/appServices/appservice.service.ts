import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from "./auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

    public getUserData(userId: number) {

      return this.http
        .get<any>(`${environment.API_GETUSERDATA}/${userId}`, {
          headers: this.setHeadersAuth(),
        })
        .pipe(
          map((user) => {
            return user;
          })
        );
    }

    private setHeadersAuth(): HttpHeaders {
      let token = this.authService.currentUserValue.accessToken;
      let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
      headers = headers.append("Accept", "application/json");
      // headers = headers.append(
      //   "Content-Type",
      //   "application/x-www-form-urlencoded"
      // );
      headers = headers.append("Access-Control-Allow-Origin", "*");
      return headers;
    }

}

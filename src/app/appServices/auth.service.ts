import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserDataSubject!: BehaviorSubject<any>;
  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<any>;

  public currentUserData!: Observable<any>;

  constructor(private http: HttpClient,) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser") || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentUserDataSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUserData") || '{}')
    );
    this.currentUserData = this.currentUserDataSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  public login(uname: string, password: string) {
    console.log("Serverside value:",uname,password);
    return this.http
      .post<any>(`${environment.API_AUTHENTICATEUSER}`, { uname, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          //this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  public register(regData:any) {
    console.log("Serverside value:",regData);
    return this.http
      .post<any>(`${environment.API_REGISTERUSER}`, { regData })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
         // localStorage.setItem("currentUser", JSON.stringify(user));
          //this.currentUserSubject.next(user);
          return user;
        })
      );
  }

}

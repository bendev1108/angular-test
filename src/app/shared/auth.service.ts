import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'https://codingthailand.com/api/insert_user5.php'
  loginUrl = 'https://dev-mfl5m1g0fzerb1bv.us.auth0.com/oauth/token'
  profileUrl = 'https://dev-mfl5m1g0fzerb1bv.us.auth0.com/userinfo'

  constructor(private http: HttpClient) { }

  register(formValues: any): Observable<any> {
    const myheaders = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.registerUrl, formValues, { headers: myheaders })
    .pipe(
      retry (1),
      catchError(this.handleError)

    );
  }

  login(loginForm: any): Observable<any> {
    const myheaders = { 'Content-Type': 'application/json' };
    const body = {
      "grant_type": 'password',
      "username": loginForm.email,
      "password": loginForm.password,
      "udience": 'https://dev-mfl5m1g0fzerb1bv.us.auth0.com/api/v2/',
      "scope": 'openid',
      "client_id": 'tTYwiAi3BI8VwamJmwaSCi63bIyQNVj7'
    };

    return this.http.post<any>(this.loginUrl, body, { headers: myheaders });
  }

  getProfile(): Observable<any>{
    const token = JSON.parse(localStorage.getItem('token'));
    const myheaders ={
      'Authorization': 'Bearer '+ token.access_token
    };

     return this.http.get<any>(this.profileUrl, { headers: myheaders });
   }

  isLogin(): boolean{
    const token = JSON.parse(localStorage.getItem('token'));
    if (token){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  private handleError(error: HttpErrorResponse){
    return throwError(error);
  }

}

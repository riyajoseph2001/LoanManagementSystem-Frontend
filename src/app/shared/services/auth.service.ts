import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }
  //verify login UserName and Password
  public loginVerify(user: User): Observable<any> {

    //Call WebApi for checking UserName and Password
    //http://localhost:9091/api/users/anu&anu@123
    return this.httpClient.get<User>(environment.apiUrl + '/api/users/' + user.userName + '&' + user.password)

  }
  //LogOut
  public logout() {
    //clear all session and local storage keys
    localStorage.removeItem("USER_NAME");
    sessionStorage.removeItem("USER_NAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");

    //redirect to Login
    this.router.navigate(['auth/login']);
  }
}

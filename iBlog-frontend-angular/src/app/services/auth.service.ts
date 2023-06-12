import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../auth/payload/register-payload';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginPayload } from '../auth/payload/login-payload';
import { JwtAuthResponse } from '../auth/payload/jwt-auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/';

  constructor(
    private httpClient: HttpClient,
    private localStoraqeService: LocalStorageService
  ) {}

  register(registerPayLoad: RegisterPayload): Observable<any> {
    console.log("register method");
    return this.httpClient.post(this.url + 'signup', registerPayLoad);
  }


  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient
      .post<JwtAuthResponse>(this.url + 'login', loginPayload)
      .pipe(
        map((data) => {
          this.localStoraqeService.store(
            'authenticationToken',
            data.authenticationToken
          );
          this.localStoraqeService.store('username', data.username);
          return true;
        })
      );
  }

  isAuthenticated(): boolean {

    return this.localStoraqeService.retrieve('username') != null;
  }

  logout() {
    this.localStoraqeService.clear('authenticationToken');
    this.localStoraqeService.clear('username');
  }



}

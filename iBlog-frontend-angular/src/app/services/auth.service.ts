import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../auth/payload/register-payload';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';


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
    return this.httpClient.post(this.url + 'signup', registerPayLoad);
  }


  isAuthenticated(): boolean {
    return this.localStoraqeService.retrieve('username') != null;
  }

  logout() {
    this.localStoraqeService.clear('authenticationToken');
    this.localStoraqeService.clear('username');
  }


}

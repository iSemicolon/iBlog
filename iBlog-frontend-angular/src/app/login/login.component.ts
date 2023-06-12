import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginPayload } from '../auth/payload/login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginPayload!: LoginPayload;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
    this.loginPayload = {
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    this.loginPayload.username = this.loginForm.get('username')?.value;
    this.loginPayload.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginPayload).subscribe(
      (data) => {
        this.router.navigateByUrl('/home');
        console.log('Login Success');
      },
      (error) => {
        console.log('Login Failed');
      }
    );
  }
}



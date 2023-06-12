import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPayload } from '../auth/payload/register-payload';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  registerPayload: RegisterPayload;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    this.registerPayload = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  ngOnInit(): void {}

  onSubmit() {
    this.registerPayload.username = this.registerForm.get('username')?.value;
    this.registerPayload.email = this.registerForm.get('email')?.value;
    this.registerPayload.password = this.registerForm.get('password')?.value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword')?.value;

    this.authService.register(this.registerPayload).subscribe(
      (data) => {
        this.router.navigateByUrl('/register-success');
        console.log('Registration Sucess');
      },
      (error) => {
        console.log('Registration Failed');
      }
    );
  }
}

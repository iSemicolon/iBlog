import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register-success', component: RegisterSuccessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

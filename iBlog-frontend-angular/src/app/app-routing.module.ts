import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AuthGuard } from './guard/auth.guard';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-success', component: RegisterSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: ReadMoreComponent },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientInterceptor } from './interceptor/http-client-interceptor';
import { ReadMoreComponent } from './read-more/read-more.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    LoginComponent,
    HomeComponent,
    AddPostComponent,
    ReadMoreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage.forRoot(),
    RouterModule,
    HttpClientModule,
    EditorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsPopupComponent } from './movies/movie-details-popup/movie-details-popup.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    MovieDetailsPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class CoreModule { }

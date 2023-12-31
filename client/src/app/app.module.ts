import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { MinibarComponent } from './minibar/minibar.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MinibarComponent,
    HomeComponent,
    MembersComponent,
    PhotosComponent,
    ProfileComponent,
    FooterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    LandingComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

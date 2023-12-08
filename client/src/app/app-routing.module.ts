import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';

import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },

  { path: 'photos', component: PhotosComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

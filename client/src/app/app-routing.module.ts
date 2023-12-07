import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { GroupsComponent } from './groups/groups.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'profile', component: ProfileComponent },
  {path : '', component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

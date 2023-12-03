// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostCreationComponent } from './post-creation/post-creation.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: UserProfileComponent },
  {path : 'create-post', component: PostCreationComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

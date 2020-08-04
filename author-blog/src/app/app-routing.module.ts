import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoPostComponent } from './do-post/do-post.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'dopost',
    component: DoPostComponent
  },
  {
    path: 'posts',
    loadChildren: 'app/posts/posts.module#PostsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

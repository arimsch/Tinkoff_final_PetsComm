import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { NewsComponent } from '../news/news.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewsSubscribeComponent } from '../news/news-subscribe/news-subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UserProfileComponent },
      { path: 'news',
      loadChildren: () => import('./../news/news.module').then(m => m.NewsModule) },
      { path: 'users', component: UsersListComponent },
      { path: 'newsSub', component: NewsSubscribeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

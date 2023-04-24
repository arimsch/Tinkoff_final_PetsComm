import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'news',
      loadChildren: () =>
        import('./news-list/news-list.module').then(m => m.NewsListModule),
    },
  ]),
  // Shell.childRoutes([
  //   {
  //     path: 'employee',
  //     // canActivate:[AuthGuardWithForcedLogin],
  //     loadChildren: () => import('./features/employee/employee.module').then((m) => m.EmployeeModule),
  //   },
  //   {
  //     path: 'position',
  //     loadChildren: () => import('./features/position/position.module').then((m) => m.PositionModule),
  //   },

  // ]),
  // { path: 'should-login', component: ShouldLoginComponent },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

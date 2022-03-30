import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadService } from './preload.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/users.module').then((m) => m.UsersModule),
    data: {
      title: 'Users List'
    },
  },
  /*{
    path: '**',
    redirectTo: 'login',
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadService })],
  exports: [RouterModule],
  providers: [PreloadService],
})
export class AppRoutingModule {}

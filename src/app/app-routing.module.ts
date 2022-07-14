import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessModule } from './modules/access/access.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [

  {
    path: 'admin',
    loadChildren: () => AdminModule
  },
  {
    path: 'app',
    loadChildren: () => UserModule
  },
  {
    path: '',
    loadChildren: () => AccessModule
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

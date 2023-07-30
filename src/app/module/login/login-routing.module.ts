import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'admin-page-principal', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)},
  {path: 'caja-page-principal', loadChildren: () => import('../caja/caja.module').then(m => m.CajaModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
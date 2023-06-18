import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

//rutas de navegacion por URL
const routes: Routes = [
  {path: "", redirectTo: "/login-principal", pathMatch: "full"},
  {path: "login-principal", component: LoginPageComponent},
  {path: "admin-page-principal", component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

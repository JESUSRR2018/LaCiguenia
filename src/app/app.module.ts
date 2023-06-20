import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarNavigationComponent } from './components/navbar-navigation/navbar-navigation.component';
import { FooterEndpageComponent } from './components/footer-endpage/footer-endpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    LoginPageComponent,
    NavbarNavigationComponent,
    FooterEndpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

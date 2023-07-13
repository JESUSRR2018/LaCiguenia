import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarNavigationComponent } from './components/navbar-navigation/navbar-navigation.component';
import { FooterEndpageComponent } from './components/footer-endpage/footer-endpage.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { SectionOneComponent } from './components/section-one/section-one.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    LoginPageComponent,
    NavbarNavigationComponent,
    FooterEndpageComponent,
    HeaderSectionComponent,
    SectionOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
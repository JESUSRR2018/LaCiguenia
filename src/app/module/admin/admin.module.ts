import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SectionOneComponent } from './admin-page/components/section-one/section-one.component';
import { SectionTwoComponent } from './admin-page/components/section-two/section-two.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  declarations: [
    AdminPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ComponentModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionNavbarComponent } from './section-navbar/section-navbar.component';



@NgModule({
  declarations: [
    SectionHeaderComponent,
    SectionNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionHeaderComponent,
    SectionNavbarComponent
  ]
})
export class ComponentModule { }

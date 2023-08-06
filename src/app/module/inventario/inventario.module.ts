import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioPageComponent } from './inventario-page/inventario-page.component';
import { ComponentModule } from 'src/app/component/component.module';
import { SectionOneComponent } from './inventario-page/components/section-one/section-one.component';


@NgModule({
  declarations: [
    InventarioPageComponent,
    SectionOneComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    ComponentModule
  ]
})
export class InventarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccessComponent,

  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    SharedModule
  ]
})
export class AccessModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AfxtradeComponent } from './afxtrade/afxtrade.component';
import { TraumappComponent } from './traumapp/traumapp.component';
import { TraumappLandingComponent } from './traumapp-landing/traumapp-landing.component';
import { QuipusComponent } from './quipus/quipus.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [AfxtradeComponent, TraumappComponent, TraumappLandingComponent, QuipusComponent],
  exports: [AfxtradeComponent, TraumappComponent, TraumappLandingComponent, QuipusComponent],
})
export class ProjectsModule {}

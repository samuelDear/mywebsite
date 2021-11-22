import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TraumappLandingComponent } from './traumapp-landing/traumapp-landing.component';
import { QuipusComponent } from './quipus/quipus.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [TraumappLandingComponent, QuipusComponent],
  exports: [TraumappLandingComponent, QuipusComponent],
})
export class ProjectsModule {}

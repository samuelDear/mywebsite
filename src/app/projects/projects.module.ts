import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuipusComponent } from './quipus/quipus.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [QuipusComponent],
  exports: [QuipusComponent],
})
export class ProjectsModule {}

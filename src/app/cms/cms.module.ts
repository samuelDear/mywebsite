import { CmsRoutingModule } from  './cms-routing.module';
import { LoginComponent } from './login/login.component';
import { HomecmsComponent } from './homecms/homecms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomecmsComponent,
    ProjectsComponent,
    ProjectEditComponent
  ],
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CmsRoutingModule
]
})
export class CmsModule { }

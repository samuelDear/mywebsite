import { CmsRoutingModule } from  './cms-routing.module';
import { LoginComponent } from './login/login.component';
import { HomecmsComponent } from './homecms/homecms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorsEditComponent } from './colors-edit/colors-edit.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesEditComponent } from './features-edit/features-edit.component';
import { TypographiesComponent } from './typographies/typographies.component';
import { TypographiesEditComponent } from './typographies-edit/typographies-edit.component';
import { SlidemenuComponent } from './slidemenu/slidemenu.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomecmsComponent,
    ProjectsComponent,
    ProjectEditComponent,
    ColorsComponent,
    ColorsEditComponent,
    FeaturesComponent,
    FeaturesEditComponent,
    TypographiesComponent,
    TypographiesEditComponent,
    SlidemenuComponent
  ],
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CmsRoutingModule
]
})
export class CmsModule { }

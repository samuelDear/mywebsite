import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomecmsComponent } from './homecms/homecms.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorsEditComponent } from './colors-edit/colors-edit.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesEditComponent } from './features-edit/features-edit.component';
import { TypographiesComponent } from './typographies/typographies.component';
import { TypographiesEditComponent } from './typographies-edit/typographies-edit.component';
import { StudiesComponent } from './studies/studies.component';
import { StudiesEditComponent } from './studies-edit/studies-edit.component';

const  routes:  Routes  = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomecmsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-edit/:id', component: ProjectEditComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'colors-edit/:id', component: ColorsEditComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'features-edit/:id', component: FeaturesEditComponent },
  { path: 'typographies', component: TypographiesComponent },
  { path: 'typographies-edit/:id', component: TypographiesEditComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'studies-edit/:id', component: StudiesEditComponent }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  CmsRoutingModule { }

import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomecmsComponent } from './homecms/homecms.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const  routes:  Routes  = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomecmsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-edit/:id', component: ProjectEditComponent }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  CmsRoutingModule { }

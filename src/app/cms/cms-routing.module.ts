import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomecmsComponent } from './homecms/homecms.component';

const  routes:  Routes  = [
{
  path:  '',
  component:  LoginComponent,
},
{
  path:  'home',
  component:  HomecmsComponent
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  CmsRoutingModule { }

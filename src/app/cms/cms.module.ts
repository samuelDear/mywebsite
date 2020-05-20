import { CmsRoutingModule } from  './cms-routing.module';
import { LoginComponent } from './login/login.component';
import { HomecmsComponent } from './homecms/homecms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    HomecmsComponent
  ],
imports: [
  CommonModule,
  CmsRoutingModule
]
})
export class CmsModule { }

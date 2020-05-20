import { CmsRoutingModule } from  './cms-routing.module';
import { LoginComponent } from './login/login.component';
import { HomecmsComponent } from './homecms/homecms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    HomecmsComponent
  ],
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CmsRoutingModule
]
})
export class CmsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraumappComponent } from './traumapp.component';

const routes: Routes = [{ path: '', component: TraumappComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraumappRoutingModule {}

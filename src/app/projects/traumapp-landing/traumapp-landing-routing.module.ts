import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraumappLandingComponent } from './traumapp-landing.component';

const routes: Routes = [{ path: '', component: TraumappLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraumappLandingRoutingModule {}

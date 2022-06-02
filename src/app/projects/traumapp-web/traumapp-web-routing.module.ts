import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraumappWebComponent } from './traumapp-web.component';

const routes: Routes = [{ path: '', component: TraumappWebComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraumappWebRoutingModule {}

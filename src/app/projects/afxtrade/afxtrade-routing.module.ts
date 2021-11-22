import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfxtradeComponent } from './afxtrade.component';

const routes: Routes = [{ path: '', component: AfxtradeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfxtradeRoutingModule {}

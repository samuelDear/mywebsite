import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FjcintranetComponent } from './fjcintranet.component';

const routes: Routes = [{ path: '', component: FjcintranetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FjcintranetRoutingModule {}

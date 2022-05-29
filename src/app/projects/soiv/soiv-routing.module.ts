import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoivComponent } from './soiv.component';

const routes: Routes = [{ path: '', component: SoivComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoivRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesComponent } from './studies.component';

const routes: Routes = [{ path: '', component: StudiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudiesRoutingModule {}

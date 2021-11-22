import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuipusComponent } from './quipus.component';

const routes: Routes = [{ path: '', component: QuipusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuipusRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrmComponent } from './orm.component';

const routes: Routes = [{ path: '', component: OrmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrmRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideMenuComponent } from './slide-menu.component';

const routes: Routes = [{ path: '', component: SlideMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideMenuRoutingModule {}

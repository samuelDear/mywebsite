import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnportfolioComponent } from './ownportfolio.component';

const routes: Routes = [{ path: '', component: OwnportfolioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnPorfolioRoutingRoutingModule {}

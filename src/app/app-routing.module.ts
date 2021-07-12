import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { AboutComponent } from './about/about.component';
import { StudiesComponent } from './studies/studies.component';
import { FjcintranetComponent } from './projects/fjcintranet/fjcintranet.component';
import { OrmComponent } from './projects/orm/orm.component';
import { OwnportfolioComponent } from './projects/ownportfolio/ownportfolio.component';
import { AfxtradeComponent } from './projects/afxtrade/afxtrade.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'menu', component: SlideMenuComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'studies', component: StudiesComponent, pathMatch: 'full' },
  { path: 'FJCIntranet', component: FjcintranetComponent, pathMatch: 'full' },
  { path: 'portfolio', component: OwnportfolioComponent, pathMatch: 'full' },
  { path: 'ormv', component: OrmComponent, pathMatch: 'full' },
  { path: 'afxtrade', component: AfxtradeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

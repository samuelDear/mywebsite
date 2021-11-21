import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FjcintranetComponent } from './projects/fjcintranet/fjcintranet.component';
import { OrmComponent } from './projects/orm/orm.component';
import { OwnportfolioComponent } from './projects/ownportfolio/ownportfolio.component';
import { AfxtradeComponent } from './projects/afxtrade/afxtrade.component';
import { TraumappComponent } from './projects/traumapp/traumapp.component';
import { TraumappLandingComponent } from './projects/traumapp-landing/traumapp-landing.component';
import { QuipusComponent } from './projects/quipus/quipus.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), pathMatch: 'full' },
  {
    path: 'studies',
    loadChildren: () => import('./studies/studies.module').then(m => m.StudiesModule),
    pathMatch: 'full',
  },
  { path: 'FJCIntranet', component: FjcintranetComponent, pathMatch: 'full' },
  { path: 'portfolio', component: OwnportfolioComponent, pathMatch: 'full' },
  { path: 'ormv', component: OrmComponent, pathMatch: 'full' },
  { path: 'afxtrade', component: AfxtradeComponent, pathMatch: 'full' },
  { path: 'traumapp', component: TraumappComponent, pathMatch: 'full' },
  { path: 'traumappLanding', component: TraumappLandingComponent, pathMatch: 'full' },
  { path: 'quipus', component: QuipusComponent, pathMatch: 'full' },
  {
    path: 'menu',
    loadChildren: () => import('./slide-menu/slide-menu.module').then(m => m.SlideMenuModule),
    pathMatch: 'full',
  },
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

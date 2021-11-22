import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuipusComponent } from './projects/quipus/quipus.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), pathMatch: 'full' },
  {
    path: 'studies',
    loadChildren: () => import('./studies/studies.module').then(m => m.StudiesModule),
    pathMatch: 'full',
  },
  {
    path: 'FJCIntranet',
    loadChildren: () => import('./projects/fjcintranet/fjcintranet.module').then(m => m.FjcintranetModule),
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./projects/ownportfolio/ownportfolio.module').then(m => m.OwnportfolioModule),
    pathMatch: 'full',
  },
  { path: 'ormv', loadChildren: () => import('./projects/orm/orm.module').then(m => m.OrmModule), pathMatch: 'full' },
  {
    path: 'afxtrade',
    loadChildren: () => import('./projects/afxtrade/afxtrade.module').then(m => m.AfxtradeModule),
    pathMatch: 'full',
  },
  {
    path: 'traumapp',
    loadChildren: () => import('./projects/traumapp/traumapp.module').then(m => m.TraumappModule),
    pathMatch: 'full',
  },
  {
    path: 'traumappLanding',
    loadChildren: () =>
      import('./projects/traumapp-landing/traumapp-landing.module').then(m => m.TraumappLandingModule),
    pathMatch: 'full',
  },
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

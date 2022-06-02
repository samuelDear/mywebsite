import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full' },
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
  {
    path: 'quipus',
    loadChildren: () => import('./projects/quipus/quipus.module').then(m => m.QuipusModule),
    pathMatch: 'full',
  },
  {
    path: 'tms',
    loadChildren: () => import('./projects/tms/tms.module').then(m => m.TmsModule),
    pathMatch: 'full',
  },
  {
    path: 'soiv',
    loadChildren: () => import('./projects/soiv/soiv.module').then(m => m.SoivModule),
    pathMatch: 'full',
  },
  {
    path: 'traumappWeb',
    loadChildren: () => import('./projects/traumapp-web/traumapp-web.module').then(m => m.TraumappWebModule),
    pathMatch: 'full',
  },
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

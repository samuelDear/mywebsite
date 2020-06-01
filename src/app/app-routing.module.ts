import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { SlideMenuComponent } from './app/slide-menu/slide-menu.component';
import { AboutComponent } from './app/about/about.component';
import { ProjectComponent } from './app/project/project.component';
import { LoginComponent } from './cms/login/login.component';
import { HomecmsComponent } from './cms/homecms/homecms.component';
import { StudiesComponent } from './app/studies/studies.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'menu', component: SlideMenuComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'project/:id', component: ProjectComponent, pathMatch: 'full' },
  { path: 'studies', component: StudiesComponent, pathMatch: 'full' },
  { path: 'cms',  loadChildren: () => import(`./cms/cms.module`).then(m => m.CmsModule)},

  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

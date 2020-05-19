import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'menu', component: SlideMenuComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'project/:id', component: ProjectComponent, pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

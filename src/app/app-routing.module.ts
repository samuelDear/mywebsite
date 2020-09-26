import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { StudiesComponent } from './studies/studies.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animationState: 'One' } },
  { path: 'menu', component: SlideMenuComponent, pathMatch: 'full', data: { animationState: 'Two' } },
  { path: 'about', component: AboutComponent, pathMatch: 'full', data: { animationState: 'Three' } },
  { path: 'project', component: ProjectComponent, pathMatch: 'full', data: { animationState: 'Three' } },
  { path: 'studies', component: StudiesComponent, pathMatch: 'full', data: { animationState: 'Five' } }

  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

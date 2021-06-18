import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material UI components */
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StranslateDirective } from './components/directives/stranslate.directive';
import { FooterComponent } from './components/footer/footer.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { AboutComponent } from './about/about.component';
import { StudiesComponent } from './studies/studies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FjcintranetComponent } from './projects/fjcintranet/fjcintranet.component';
import { OrmComponent } from './projects/orm/orm.component';
import { OwnportfolioComponent } from './projects/ownportfolio/ownportfolio.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StranslateDirective,
    FooterComponent,
    SlideMenuComponent,
    AboutComponent,
    StudiesComponent,
    PageNotFoundComponent,
    FjcintranetComponent,
    OrmComponent,
    OwnportfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

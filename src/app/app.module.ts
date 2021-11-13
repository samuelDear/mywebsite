import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material UI components */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StranslateDirective } from './components/directives/stranslate.directive';
import { FooterComponent } from './components/footer/footer.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { AboutComponent } from './about/about.component';
import { StudiesComponent } from './studies/studies.component';
import { FjcintranetComponent } from './projects/fjcintranet/fjcintranet.component';
import { OrmComponent } from './projects/orm/orm.component';
import { OwnportfolioComponent } from './projects/ownportfolio/ownportfolio.component';
import { AfxtradeComponent } from './projects/afxtrade/afxtrade.component';
import { TraumappComponent } from './projects/traumapp/traumapp.component';
import { ImgLoaderComponent } from './components/img-loader/img-loader.component';
import { FeaturesBoxComponent } from './components/features-box/features-box.component';
import { ThanksReadingComponent } from './components/thanks-reading/thanks-reading.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { MoreProjectsComponent } from './components/more-projects/more-projects.component';
import { TraumappLandingComponent } from './projects/traumapp-landing/traumapp-landing.component';
import { ImageScreenComponent } from './components/image-screen/image-screen.component';
import { TypographyLettersComponent } from './components/typographyLetters/typography-letters.component';
import { QuipusComponent } from './projects/quipus/quipus.component';
import { TitleProjectsComponent } from './components/title-projects/title-projects.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
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
    FjcintranetComponent,
    OrmComponent,
    OwnportfolioComponent,
    AfxtradeComponent,
    TraumappComponent,
    ImgLoaderComponent,
    FeaturesBoxComponent,
    ThanksReadingComponent,
    ColorPaletteComponent,
    MoreProjectsComponent,
    TraumappLandingComponent,
    ImageScreenComponent,
    QuipusComponent,
    TypographyLettersComponent,
    TitleProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

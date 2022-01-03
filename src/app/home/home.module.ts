import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ComponentsModule } from '../components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
})
export class HomeModule {}

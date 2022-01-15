import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { ComponentsModule } from '../components/components.module';
import { StudiesComponent } from './studies.component';
import { StudiesRoutingModule } from './studies-routing.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/studies/', suffix: '.json' },
    { prefix: './assets/i18n/common/copyright/', suffix: '.json' },
  ]);
}

@NgModule({
  declarations: [StudiesComponent],
  imports: [
    CommonModule,
    StudiesRoutingModule,
    ComponentsModule,
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
export class StudiesModule {}

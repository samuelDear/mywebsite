import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ComponentsModule } from '../../components/components.module';
import { FjcintranetRoutingModule } from './fjcintranet-routing.module';
import { FjcintranetComponent } from './fjcintranet.component';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/projects/fjcintranet/', suffix: '.json' },
    { prefix: './assets/i18n/common/resumes/', suffix: '.json' },
  ]);
}

@NgModule({
  declarations: [FjcintranetComponent],
  imports: [
    CommonModule,
    FjcintranetRoutingModule,
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
export class FjcintranetModule {}

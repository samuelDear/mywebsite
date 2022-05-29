import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ComponentsModule } from '../../components/components.module';
import { SoivRoutingModule } from './soiv-routing.module';
import { SoivComponent } from './soiv.component';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/projects/soiv/', suffix: '.json' },
    { prefix: './assets/i18n/common/resumes/', suffix: '.json' },
  ]);
}

@NgModule({
  declarations: [SoivComponent],
  imports: [
    CommonModule,
    SoivRoutingModule,
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
export class SoivModule {}

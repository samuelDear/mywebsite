import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { ComponentsModule } from '../../components/components.module';
import { OrmComponent } from './orm.component';
import { OrmRoutingModule } from './orm-routing.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/projects/orm/', suffix: '.json' },
    { prefix: './assets/i18n/common/resumes/', suffix: '.json' },
  ]);
}

@NgModule({
  declarations: [OrmComponent],
  imports: [
    CommonModule,
    OrmRoutingModule,
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
export class OrmModule {}

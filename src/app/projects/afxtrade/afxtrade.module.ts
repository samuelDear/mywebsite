import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ComponentsModule } from '../../components/components.module';
import { AfxtradeComponent } from './afxtrade.component';
import { AfxtradeRoutingModule } from './afxtrade-routing.module';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/projects/afxtrade/', '.json');
}

@NgModule({
  declarations: [AfxtradeComponent],
  imports: [
    CommonModule,
    AfxtradeRoutingModule,
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
export class AfxtradeModule {}

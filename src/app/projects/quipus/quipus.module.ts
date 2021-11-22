import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ComponentsModule } from '../../components/components.module';
import { QuipusRoutingModule } from './quipus-routing.module';
import { QuipusComponent } from './quipus.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/projects/quipus/', '.json');
}

@NgModule({
  declarations: [QuipusComponent],
  imports: [
    CommonModule,
    QuipusRoutingModule,
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
export class QuipusModule {}

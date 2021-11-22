import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ComponentsModule } from '../../components/components.module';
import { FjcintranetRoutingModule } from './fjcintranet-routing.module';
import { FjcintranetComponent } from './fjcintranet.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/projects/fjcintranet/', '.json');
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SlideMenuRoutingModule } from './slide-menu-routing.module';
import { SlideMenuComponent } from './slide-menu.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/slide-menu/', '.json');
}

@NgModule({
  declarations: [SlideMenuComponent],
  imports: [
    CommonModule,
    SlideMenuRoutingModule,
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
export class SlideMenuModule {}

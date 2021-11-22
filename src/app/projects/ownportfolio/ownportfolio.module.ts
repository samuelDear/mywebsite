import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ComponentsModule } from '../../components/components.module';
import { OwnportfolioComponent } from './ownportfolio.component';
import { OwnPorfolioRoutingRoutingModule } from './ownportfolio-routing.module';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/projects/ownportfolio/', '.json');
}

@NgModule({
  declarations: [OwnportfolioComponent],
  imports: [
    CommonModule,
    OwnPorfolioRoutingRoutingModule,
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
export class OwnportfolioModule {}
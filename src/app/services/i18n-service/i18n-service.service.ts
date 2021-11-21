import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18Service {
  localeEvent = new Subject<string>();
  localeLang = 'es';

  // eslint-disable-next-line no-unused-vars
  constructor(private translate: TranslateService) {}

  changeLocale(locale: string): void {
    this.translate.use(locale);
    this.localeLang = locale;
    this.localeEvent.next(locale);
  }

  getLanguage(): string {
    return this.localeLang;
  }
}

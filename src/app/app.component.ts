import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Event as NavigationEvent, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { navigationCustom } from './transitionPopstate';
import { ShowHeader } from './services/common';
import { I18Service } from './services/i18n-service/i18n-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  nav = true;
  buttonShow = true;

  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService, router: Router, private i18Service: I18Service) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang() || '';

    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

    this.i18Service.localeEvent.subscribe((locale: string) => {
      this.translate.use(locale);
    });

    this.changeLocale(browserLang.match(/en|es/) ? browserLang : 'en');

    router.events
      .pipe(
        filter((event: NavigationEvent) => {
          return event instanceof NavigationStart;
        }),
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .subscribe((evento: any) => {
        if (evento.navigationTrigger == 'popstate') {
          navigationCustom(() => router.navigateByUrl(evento.url));
        }
      });
  }

  showButton(show: ShowHeader): void {
    this.buttonShow = show.showButton;
    this.nav = show.nav;
  }

  changeLocale(locale: string): void {
    this.i18Service.changeLocale(locale);
  }
}

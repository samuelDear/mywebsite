import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { cleanFonts } from '../../main';
import { navigationCustom } from '../transition';
import { I18Service } from '../services/i18n-service/i18n-service.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {
  showButton = false;
  nav = true;
  currentLang: string;

  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService, public router: Router, private i18Service: I18Service) {
    window.scroll(0, 0);
    this.currentLang = this.i18Service.getLanguage();
    translate.use(this.i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
      this.currentLang = locale;
    });
    cleanFonts();
  }

  navigation(ruta: string): void {
    navigationCustom(() => this.router.navigateByUrl(ruta));
  }

  navigationFragment(ruta: string, fragment: string): void {
    navigationCustom(() => this.router.navigate([ruta], { fragment: fragment }));
  }

  changeLocale(locale: string): void {
    this.i18Service.changeLocale(locale);
  }
}

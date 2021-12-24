import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { cleanFonts } from '../../main';
import { I18Service } from '../services/i18n-service/i18n-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  showButton = false;

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    window.scroll(0, 0);
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
    cleanFonts();
  }

  downloadCv(): void {
    window.open(`assets/cv/SamuelRojas${this.i18Service.getLanguage() == 'es' ? 'Esp' : 'Eng'}.pdf`, '_blank');
  }
}

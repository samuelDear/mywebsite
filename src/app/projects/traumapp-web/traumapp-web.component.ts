import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';

@Component({
  selector: 'app-traumapp-web',
  templateUrl: './traumapp-web.component.html',
  styleUrls: ['./traumapp-web.component.scss'],
})
export class TraumappWebComponent implements OnInit {
  constructor(public translate: TranslateService, private i18Service: I18Service) {
    window.scroll(0, 0);
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
  }
}

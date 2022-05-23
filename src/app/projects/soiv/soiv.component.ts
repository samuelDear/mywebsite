import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';

@Component({
  selector: 'app-soiv',
  templateUrl: './soiv.component.html',
  styleUrls: ['./soiv.component.scss'],
})
export class SoivComponent implements OnInit {
  constructor(public translate: TranslateService, private i18Service: I18Service) {
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';

@Component({
  selector: 'app-copyright',
  templateUrl: 'copyright.component.html',
})
export class CopyrightComponent implements OnInit {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public translate: TranslateService,
    // eslint-disable-next-line no-unused-vars
    private i18Service: I18Service,
  ) {
    translate.use(this.i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';

import { setProjectFont } from '../../../main';
import { Font, Project, FeatureType, ColorType } from '../../services/common';

@Component({
  selector: 'app-orm',
  templateUrl: './orm.component.html',
})
export class OrmComponent implements OnInit {
  families: Font[] = [
    { name: 'Montserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  features: FeatureType[] = [
    {
      title: 'feature1title',
      dsc: 'feature1',
    },
    {
      title: 'feature3title',
      dsc: 'feature3',
    },
    {
      title: 'feature4title',
      dsc: 'feature4',
    },
    {
      title: 'feature5title',
      dsc: 'feature5',
    },
    {
      title: 'feature6title',
      dsc: 'feature6',
    },
  ];

  ramdons: Project[] = [
    {
      code: '/FJCIntranet',
      name: 'FJC Intranet',
      resume: 'fjcintranet-resume',
    },
    {
      code: '',
      name: 'My Portafolio',
      resume: 'myWeb-resume',
    },
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade-resume',
    },
  ];

  colors: ColorType[] = [
    {
      dsc: '#1A2454',
    },
    {
      dsc: '#FF7355',
    },
    {
      dsc: '#7AC8D3',
    },
    {
      dsc: '#EAF5FA',
    },
  ];

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    setProjectFont(this.families);

    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';
import { navigationCustom } from 'src/app/transition';

import { setProjectFont } from '../../../main';
import { Font, Project, FeatureType, ColorType } from '../../services/common';

@Component({
  selector: 'app-ownportfolio',
  templateUrl: './ownportfolio.component.html',
  styles: ['.boxUnique{ border: 2px solid #db2696}'],
})
export class OwnportfolioComponent implements OnInit {
  families: Font[] = [
    { name: 'Signika', link: `https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap` },
    { name: 'monospace', link: '' },
  ];

  features: FeatureType[] = [
    {
      title: 'feature1title',
      dsc: 'feature1',
    },
    {
      title: 'feature2title',
      dsc: 'feature2',
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
    {
      title: 'feature7title',
      dsc: 'feature7',
    },
    {
      title: 'feature8title',
      dsc: 'feature8',
    },
  ];

  ramdons: Project[] = [
    {
      code: '/FJCIntranet',
      name: 'FJC Intranet',
      resume: 'fjcintranet.resume',
    },
    {
      code: '/ormv',
      name: 'ORM',
      resume: 'orm.resume',
    },
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade.resume',
    },
  ];

  colors: ColorType[] = [
    {
      dsc: '#4ae3cd',
    },
    {
      dsc: '#db2696',
    },
    {
      dsc: '#38ca13',
    },
    {
      dsc: '#fbb6ce',
    },
  ];

  // eslint-disable-next-line
  constructor(public router: Router, public translate: TranslateService, private i18Service: I18Service) {
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    setProjectFont(this.families);

    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
  }

  navigateToHome(): void {
    navigationCustom(() => this.router.navigate(['/']));
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';

import { setProjectFont } from '../../../main';
import { ColorType, FeatureType, Font, Project } from '../../services/common';

@Component({
  selector: 'app-traumapp-landing',
  templateUrl: './traumapp-landing.component.html',
  styleUrls: ['./traumapp-landing.component.scss'],
})
export class TraumappLandingComponent implements OnInit {
  families: Font[] = [
    { name: 'Montserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
  ];

  ramdons: Project[] = [
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade-resume',
    },
    {
      name: 'TraumApp',
      code: '/traumapp',
      resume: 'traumapp-resume',
    },
    {
      name: 'Quipus Events',
      resume: 'quipus-resume',
      code: '/quipus',
    },
  ];

  colors: ColorType[] = [
    {
      dsc: '#002854',
    },
    {
      dsc: '#2C023E',
    },
    {
      dsc: '#61B0E4',
    },
    {
      dsc: '#64068D',
    },
  ];

  features: FeatureType[] = [
    {
      title: 'traumappLanding.featureTitle1',
      dsc: 'traumappLanding.featureDsc1',
    },
    {
      title: 'traumappLanding.featureTitle2',
      dsc: 'traumappLanding.featureDsc2',
    },
    {
      title: 'traumappLanding.featureTitle3',
      dsc: 'traumappLanding.featureDsc3',
    },
    {
      title: 'traumappLanding.featureTitle4',
      dsc: 'traumappLanding.featureDsc4',
    },
    {
      title: 'traumappLanding.featureTitle5',
      dsc: 'traumappLanding.featureDsc5',
    },
    {
      title: 'traumappLanding.featureTitle6',
      dsc: 'traumappLanding.featureDsc6',
    },
  ];

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    window.scroll(0, 0);
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
    setProjectFont(this.families);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';
import { cleanFonts, fontLoader } from 'src/main';

import { ColorType, FeatureType, Font, Project } from '../../services/common';

interface FontsArr {
  name: string;
  font: Font[];
}

@Component({
  selector: 'app-quipus',
  templateUrl: './quipus.component.html',
  styleUrls: ['./quipus.component.scss'],
})
export class QuipusComponent implements OnInit {
  ramdons: Project[] = [
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade.resume',
    },
    {
      name: 'TraumApp',
      code: '/traumapp',
      resume: 'traumapp.resume',
    },
    {
      code: '/traumappLanding',
      name: 'TraumApp Landing',
      resume: 'traumappLanding.resume',
    },
  ];

  familiesJgh: Font[] = [
    { name: 'Montserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
  ];

  familiesOscars: Font[] = [
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  familiesMiss: Font[] = [
    { name: 'Montserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  familiesCopas: Font[] = [
    { name: 'Montserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  fontsFamilies: FontsArr[] = [
    {
      name: 'Jgh',
      font: [...this.familiesJgh],
    },
    {
      name: 'Oscars',
      font: [...this.familiesOscars],
    },
    {
      name: 'Miss',
      font: [...this.familiesMiss],
    },
    {
      name: 'Copas',
      font: [...this.familiesCopas],
    },
  ];

  colorsJgh: ColorType[] = [
    {
      dsc: '#673AB7',
    },
    {
      dsc: '#7EAF00',
    },
    {
      dsc: '#DC360E',
    },
    {
      dsc: '#6C52A2',
    },
  ];

  colorsOscars: ColorType[] = [
    {
      dsc: '#FFC107',
    },
    {
      dsc: '#303030',
    },
    {
      dsc: '#EFB810',
    },
    {
      dsc: '#9D9D9D',
    },
  ];

  colorsMiss: ColorType[] = [
    {
      dsc: '#1ECDF6',
    },
    {
      dsc: '#003F66',
    },
    {
      dsc: '#CDCDCD',
    },
    {
      dsc: '#006997',
    },
  ];

  colorsCopas: ColorType[] = [
    {
      dsc: '#7EAF00',
    },
    {
      dsc: '#006997',
    },
    {
      dsc: '#FFCE47',
    },
    {
      dsc: '#883B73',
    },
  ];

  commonFeatures: FeatureType[] = [
    {
      title: 'quipus.commonFeatures.featureTitle1',
      dsc: 'quipus.commonFeatures.featureDsc1',
    },
    {
      title: 'quipus.commonFeatures.featureTitle3',
      dsc: 'quipus.commonFeatures.featureDsc3',
    },
    {
      title: 'quipus.commonFeatures.featureTitle4',
      dsc: 'quipus.commonFeatures.featureDsc4',
    },
  ];

  twitterFeature: FeatureType = {
    title: 'quipus.commonFeatures.featureTitleTwitter',
    dsc: 'quipus.commonFeatures.featureDscTwitter',
  };

  jghFeatures: FeatureType[] = [
    ...this.commonFeatures,
    {
      title: 'quipus.commonFeatures.featureTitle2',
      dsc: 'quipus.commonFeatures.featureDsc2',
    },
    {
      title: 'quipus.jgh.featureTitle1',
      dsc: 'quipus.jgh.featureDsc1',
    },
  ];

  oscarsFeatures: FeatureType[] = [
    ...this.commonFeatures,
    this.twitterFeature,
    {
      title: 'quipus.oscars.featureTitle1',
      dsc: 'quipus.oscars.featureDsc1',
    },
  ];

  missFeatures: FeatureType[] = [...this.commonFeatures, this.twitterFeature];

  copasFeatures: FeatureType[] = [
    ...this.commonFeatures,
    this.twitterFeature,
    {
      title: 'quipus.copas.featureTitle1',
      dsc: 'quipus.copas.featureDsc1',
    },
    {
      title: 'quipus.copas.featureTitle2',
      dsc: 'quipus.copas.featureDsc2',
    },
  ];

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });

    this.setTypoDinamyc(this.familiesJgh, 'typographyNameJgh', 'typographyExampleJgh');
  }

  setTypoDinamyc(families: Font[], nameId: string, exampleId: string): void {
    setTimeout(() => {
      families.forEach((element: Font, index: number) => {
        fontLoader(element);
        const div = document.getElementById(`${nameId}${index + 1}`);
        const divExample = document.getElementById(`${exampleId}${index + 1}`);
        if (div !== null && divExample !== null) {
          div.innerHTML = element.name;
          div.style.fontFamily = element.name;
          divExample.style.fontFamily = element.name;
        }
      });
    }, 100);
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    cleanFonts();
    this.setTypoDinamyc(
      this.fontsFamilies[tabChangeEvent.index].font,
      `typographyName${this.fontsFamilies[tabChangeEvent.index].name}`,
      `typographyExample${this.fontsFamilies[tabChangeEvent.index].name}`,
    );
  };
}

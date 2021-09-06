import { Component, OnInit } from '@angular/core';
import { fontLoader } from 'src/main';

import { ColorType, FeatureType, Font, Project } from '../../services/common';

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
      code: '/traumapp-landing',
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
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
  ];

  colorsMiss: ColorType[] = [
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
  ];

  colorsCopas: ColorType[] = [
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
  ];

  commonFeatures: FeatureType[] = [
    {
      title: 'quipus.commonFeatures.featureTitle1',
      dsc: 'quipus.commonFeatures.featureDsc1',
    },
    {
      title: 'quipus.commonFeatures.featureTitle2',
      dsc: 'quipus.commonFeatures.featureDsc2',
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

  jghFeatures: FeatureType[] = [
    ...this.commonFeatures,
    {
      title: 'quipus.jgh.featureTitle1',
      dsc: 'quipus.jgh.featureDsc1',
    },
  ];

  constructor() {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
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
}

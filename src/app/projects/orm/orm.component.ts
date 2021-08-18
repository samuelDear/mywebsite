import { Component, OnInit } from '@angular/core';

import { fontLoader } from '../../../main';
import { Font, Project, FeatureType, ColorType } from '../../services/common';

@Component({
  selector: 'app-orm',
  templateUrl: './orm.component.html',
})
export class OrmComponent implements OnInit {
  families: Font[] = [
    { name: 'Monserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  features: FeatureType[] = [
    {
      title: 'orm.feature1title',
      dsc: 'orm.feature1',
    },
    {
      title: 'orm.feature3title',
      dsc: 'orm.feature3',
    },
    {
      title: 'orm.feature4title',
      dsc: 'orm.feature4',
    },
    {
      title: 'orm.feature5title',
      dsc: 'orm.feature5',
    },
    {
      title: 'orm.feature6title',
      dsc: 'orm.feature6',
    },
  ];

  ramdons: Project[] = [
    {
      code: '/FJCIntranet',
      name: 'FJC Intranet',
      resume: 'fjcintranet.resume',
    },
    {
      code: '',
      name: 'My Portafolio',
      resume: 'myWeb.resume',
    },
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade.resume',
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0);
    setTimeout(() => {
      this.families.forEach((element, index) => {
        //console.log(element, index);
        fontLoader(element);
        const div = document.getElementById(`typographyName${index + 1}`);
        if (div !== null) {
          div.innerHTML = element.name;
          div.style.fontFamily = element.name;
        }
      });
    }, 100);
  }
}

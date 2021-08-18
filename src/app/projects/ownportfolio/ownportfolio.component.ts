import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';
import { Font, Project } from '../../services/common';
import { FeatureType } from 'src/app/services/common/features';
import { ColorType } from 'src/app/services/common/colors';

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
      title: 'myWeb.feature1title',
      dsc: 'myWeb.feature1',
    },
    {
      title: 'myWeb.feature2title',
      dsc: 'myWeb.feature2',
    },
    {
      title: 'myWeb.feature3title',
      dsc: 'myWeb.feature3',
    },
    {
      title: 'myWeb.feature4title',
      dsc: 'myWeb.feature4',
    },
    {
      title: 'myWeb.feature5title',
      dsc: 'myWeb.feature5',
    },
    {
      title: 'myWeb.feature6title',
      dsc: 'myWeb.feature6',
    },
    {
      title: 'myWeb.feature7title',
      dsc: 'myWeb.feature7',
    },
    {
      title: 'myWeb.feature8title',
      dsc: 'myWeb.feature8',
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

  // eslint-disable-next-line no-unused-vars
  constructor(public router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    setTimeout(() => {
      this.families.forEach((element, index) => {
        fontLoader(element);
        const div = document.getElementById(`typographyName${index + 1}`);
        if (div !== null) {
          div.innerHTML = element.name;
          div.style.fontFamily = element.name;
        }
      });
    }, 100);
  }

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }
}

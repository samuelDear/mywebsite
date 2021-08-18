import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';
import { Font, Project } from '../../services/common';
import { FeatureType } from 'src/app/services/common/features';

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
      es: {
        resume:
          'Es un sistema interno de página única(SPA). Creado con Angular 8 y Java Spring, para la gestión documental y de hallazgos en la Fundación Jacinto Convit. Un sitio web que cuenta con estándares internacionales y bajo el estándar ISO 9001.',
      },
      en: {
        resume:
          'It is an internal single page system (SPA). Created with Angular 8 and Java Spring Boot, for document and discovery management at the Fundacion Jacinto Convit. A website that has international standards and under the ISO 9001 standard.',
      },
    },
    {
      code: '/ormv',
      name: 'ORM',
      es: {
        resume:
          'Es una página web creada con HTML5, CSS3, JS y PHP. un sitio web responsivo con un diseño cómodo para facilitar la experiencia del usuario y de un alto rendimiento. Creado para facilitar a los colegios de Venezuela la inscripción a las Olimpiadas Recreativas de Matemáticas.',
      },
      en: {
        resume:
          'It is a web page created with HTML5, CSS3, JS and PHP. a responsive website with a comfortable design to facilitate the user experience and high performance. Created to make it easier for schools in Venezuela to register for the Mathematical Recreation Olympics.',
      },
    },
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      es: {
        resume:
          'Es una aplicación web creada con HTML5, CSS3, JS y PHP. Un exchange de criptomonedas Venezolano en el cual podremos trabajar con diferentes criptomonedas como BTC, USDT, PTR y más. Con una interfaz cómoda permitiendo que cualquier usuario pueda utilizarla. Ademas, con un manejo único para cada moneda.',
      },
      en: {
        resume:
          'It is a web application created with HTML5, CSS3, JS and PHP. A Venezuelan cryptocurrency exchange in which we can work with different cryptocurrencies such as BTC, USDT, PTR and more. With a comfortable interface allowing any user to use it. In addition, with a unique handling for each currency.',
      },
    },
  ];

  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService, private router: Router) {}

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

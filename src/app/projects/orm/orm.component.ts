import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';
import { Font, Project } from '../../services/common';
import { FeatureType } from 'src/app/services/common/features';

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
      code: '',
      name: 'My Portafolio',
      es: {
        resume:
          'Es un sitio web de página única(SPA). Con un alto rendimiento, un sitio web responsivo que utiliza animaciones potentes. También, usa el poder de los SVG para enriquecer la experiencia del usuario.',
      },
      en: {
        resume:
          "A website that is a Single-page application(SPA). With a high-performance, responsive website that uses powered animations. As also, uses the creative SVG's power for enriching user experience.",
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

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }
}

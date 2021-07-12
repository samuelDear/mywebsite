import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';
import { Font, Project } from '../../services/common';

const threshold = 0.1;
@Component({
  selector: 'app-afxtrade',
  templateUrl: './afxtrade.component.html',
  styleUrls: ['./afxtrade.component.scss'],
})
export class AfxtradeComponent implements OnInit {
  families: Font[] = [
    { name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
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
  ];

  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    const segurityBox = document.getElementById('segurityBox');
    const comBox = document.getElementById('comBox');
    const movementsBox = document.getElementById('movementsBox');
    const exchangeBox = document.getElementById('exchangeBox');

    segurityBox !== null && this.createObserver(segurityBox);
    comBox !== null && this.createObserver(comBox);
    movementsBox !== null && this.createObserver(movementsBox);
    exchangeBox !== null && this.createObserver(exchangeBox);

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

  createObserver(element: HTMLElement): void {
    const options = {
      threshold: threshold,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    observer.observe(element);
  }

  // eslint-disable-next-line
  handleIntersection(entries: any): void {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= threshold;
    if (isVisible) {
      entry.target.classList.remove(
        entry.target.id === 'segurityBox' || entry.target.id === 'movementsBox'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add(
        entry.target.id === 'segurityBox' || entry.target.id === 'movementsBox'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    }
  }

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }
}

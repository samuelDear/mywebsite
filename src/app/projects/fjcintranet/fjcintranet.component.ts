import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';
import { Font, Project } from '../../services/common';

const threshold = 0.1;
@Component({
  selector: 'app-fjcintranet',
  templateUrl: './fjcintranet.component.html',
  styleUrls: ['./fjcintranet.component.scss'],
})
export class FjcintranetComponent implements OnInit {
  families: Font[] = [
    { name: 'Oswald', link: `https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap` },
    { name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap` },
  ];
  ramdons: Project[] = [
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
    const logoJacintoConvit = document.getElementById('logoJacintoConvit');
    logoJacintoConvit !== null && this.createObserver(logoJacintoConvit);

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
      entry.target.classList.remove('showLogo');
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add('showLogo');
    }
  }

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }
}

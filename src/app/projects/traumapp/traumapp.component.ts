import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';
import { Font, Project } from '../../services/common';
import { fontLoader } from 'src/main';
import { FeatureType } from 'src/app/services/common/features';

const threshold = 0.1;
@Component({
  selector: 'app-traumapp',
  templateUrl: './traumapp.component.html',
  styleUrls: ['./traumapp.component.scss'],
})
export class TraumappComponent implements OnInit {
  families: Font[] = [
    { name: 'Monserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
  ];

  features: FeatureType[] = [
    {
      title: 'traumapp.featureTitle1',
      dsc: 'traumapp.featureDsc1',
    },
    {
      title: 'traumapp.featureTitle2',
      dsc: 'traumapp.featureDsc2',
    },
    {
      title: 'traumapp.featureTitle3',
      dsc: 'traumapp.featureDsc3',
    },
    {
      title: 'traumapp.featureTitle4',
      dsc: 'traumapp.featureDsc4',
    },
    {
      title: 'traumapp.featureTitle5',
      dsc: 'traumapp.featureDsc5',
    },
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

  currentSliderPatient = 1;
  isDarkMode = false;

  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    const visualResult1 = document.getElementById('visualResult1');
    const visualResult2 = document.getElementById('visualResult2');
    const visualResult3 = document.getElementById('visualResult3');
    const visualResult4 = document.getElementById('visualResult4');

    visualResult1 !== null && this.createObserver(visualResult1, this.handleIntersectionVisualResult);
    visualResult2 !== null && this.createObserver(visualResult2, this.handleIntersectionVisualResult);
    visualResult3 !== null && this.createObserver(visualResult3, this.handleIntersectionVisualResult);
    visualResult4 !== null && this.createObserver(visualResult4, this.handleIntersectionVisualResult);

    const userConfig = document.getElementById('userConfig');
    const medicineConfig = document.getElementById('medicineConfig');
    const registerModeConfig = document.getElementById('registerModeConfig');

    userConfig !== null && this.createObserver(userConfig, this.handleIntersectionConfig);
    medicineConfig !== null && this.createObserver(medicineConfig, this.handleIntersectionConfig);
    registerModeConfig !== null && this.createObserver(registerModeConfig, this.handleIntersectionConfig);

    const logoBox = document.getElementById('logoApp');
    logoBox !== null && this.createObserver(logoBox, this.handleIntersectionLogo);

    const boxAnimation: string[] = [
      'resumeSection',
      'introSection',
      'visualResultSecion',
      'patientsSection',
      'formsSections',
      'calendarSection',
      'configSections',
      'principalFeatures',
    ];

    setTimeout(() => {
      boxAnimation.map((val: string) => {
        const boxAnimated: HTMLElement = <HTMLElement>document.getElementById(val);
        boxAnimated.classList.remove('entryPage');
      });
    }, 1000);

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

  // eslint-disable-next-line
  createObserver(element: HTMLElement, intersector: (entries: any) => void): void {
    const options = {
      threshold: threshold,
    };

    const observer = new IntersectionObserver(intersector, options);

    observer.observe(element);
  }

  // eslint-disable-next-line
  handleIntersectionVisualResult(entries: any): void {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= threshold;
    if (isVisible) {
      entry.target.classList.remove(
        entry.target.id === 'visualResult1' || entry.target.id === 'visualResult3'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add(
        entry.target.id === 'visualResult1' || entry.target.id === 'visualResult3'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    }
  }

  // eslint-disable-next-line
  handleIntersectionConfig(entries: any): void {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= threshold;
    if (isVisible) {
      entry.target.classList.remove('configHideBox');
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add('configHideBox');
    }
  }

  // eslint-disable-next-line
  handleIntersectionLogo(entries: any): void {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= threshold;
    if (isVisible) {
      entry.target.classList.remove('logoTraumappHide');
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add('logoTraumappHide');
    }
  }

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }

  scrollToRegisterPatient(direction: number): void {
    const sliderBox: HTMLElement = <HTMLElement>document.getElementById('registerPatientsSlider');
    let position = 0;
    if (this.currentSliderPatient >= 3 && direction > 0) {
      this.currentSliderPatient = 1;
      position = 0;
    } else if (direction > 0) {
      if (this.currentSliderPatient < 3) {
        position = sliderBox.offsetWidth * this.currentSliderPatient;
      }
      this.currentSliderPatient += direction;
    } else {
      if (this.currentSliderPatient - 1 <= 0) {
        this.currentSliderPatient = 3;
        position = sliderBox.offsetWidth * 2;
      } else {
        this.currentSliderPatient += direction;
        position = sliderBox.offsetWidth * (this.currentSliderPatient - 1);
      }
    }
    sliderBox.scrollTo({
      left: position,
      behavior: 'smooth',
    });
  }
  setDarksMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}

import { Component, OnInit } from '@angular/core';

import { Font, Project, FeatureType, ColorType } from '../../services/common';
import { setProjectFont } from 'src/main';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';

const threshold = 0.1;
@Component({
  selector: 'app-traumapp',
  templateUrl: './traumapp.component.html',
  styleUrls: ['./traumapp.component.scss'],
})
export class TraumappComponent implements OnInit {
  families: Font[] = [
    { name: 'Montserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
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
      resume: 'orm.resume',
    },
    {
      code: '',
      name: 'My Portafolio',
      resume: 'myWeb.resume',
    },
    {
      code: '/traumappLanding',
      name: 'TraumApp Landing',
      resume: 'traumappLanding.resume',
    },
  ];

  colors: ColorType[] = [
    {
      dsc: '#49ABED',
    },
    {
      dsc: '#D168FF',
    },
    {
      dsc: '#2A4D75',
    },
    {
      dsc: '#51136C',
    },
  ];

  currentSliderPatient = 1;
  isDarkMode = false;

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });

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

    setProjectFont(this.families);
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

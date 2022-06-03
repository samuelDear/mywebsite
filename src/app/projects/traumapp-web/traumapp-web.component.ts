import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColorType, Font, Project } from 'src/app/services/common';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';
import { setProjectFont } from 'src/main';

const threshold = 0.1;
@Component({
  selector: 'app-traumapp-web',
  templateUrl: './traumapp-web.component.html',
  styleUrls: ['./traumapp-web.component.scss'],
})
export class TraumappWebComponent implements OnInit {
  families: Font[] = [
    { name: 'Montserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
  ];

  colors: ColorType[] = [
    {
      dsc: '#1A97EC',
    },
    {
      dsc: '#51136C',
    },
    {
      dsc: '#2A4D75',
    },
    {
      dsc: '#D168FF',
    },
  ];

  ramdons: Project[] = [
    {
      name: 'Quipus Events',
      resume: 'quipus-resume',
      code: '/quipus',
    },
    {
      code: '/tms',
      name: 'TMS',
      resume: 'tms-resume',
    },
    {
      name: 'SOIV',
      resume: 'soiv-resume',
      code: '/soiv',
    },
  ];

  isDarkMode = true;

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    window.scroll(0, 0);
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });

    const performanceBox = document.getElementById('performance');
    const moduleBox = document.getElementById('module');
    const darkModeBox = document.getElementById('darkMode');
    const responsiveDesignBox = document.getElementById('responsiveDesign');

    performanceBox !== null && this.createObserver(performanceBox);
    moduleBox !== null && this.createObserver(moduleBox);
    darkModeBox !== null && this.createObserver(darkModeBox);
    responsiveDesignBox !== null && this.createObserver(responsiveDesignBox);

    setProjectFont(this.families);
  }

  setDarksMode(): void {
    this.isDarkMode = !this.isDarkMode;
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
        entry.target.id === 'performance' || entry.target.id === 'darkMode' ? 'featureShowRight' : 'featureShowLeft',
      );
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add(
        entry.target.id === 'performance' || entry.target.id === 'darkMode' ? 'featureShowRight' : 'featureShowLeft',
      );
    }
  }
}

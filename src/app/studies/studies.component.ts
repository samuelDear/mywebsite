import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { cleanFonts } from '../../main';
import { Course } from '../services/common';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
})
export class StudiesComponent implements OnInit, OnDestroy {
  showButton = true;
  studies: Course[] = [
    {
      reference: '2021',
      datecreated: {
        month: '01',
        year: '2021',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de ReactJs',
      },
      en: {
        title: 'ReactJs Course',
      },
    },
    {
      reference: '2020',
      datecreated: {
        month: '08',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de API Rest',
      },
      en: {
        title: 'API Rest Course',
      },
    },
    {
      datecreated: {
        month: '08',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Laravel',
      },
      en: {
        title: 'Laravel Course',
      },
    },
    {
      datecreated: {
        month: '08',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de PHP',
      },
      en: {
        title: 'PHP Course',
      },
    },
    {
      datecreated: {
        month: '07',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de POO',
      },
      en: {
        title: 'OOP Course',
      },
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de C++',
      },
      en: {
        title: 'C++ Course',
      },
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Fundamentos de Arquitectura de Software',
      },
      en: {
        title: 'Software Architecture Fundamentals Course',
      },
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de C',
      },
      en: {
        title: 'C Course',
      },
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Redes de Internet',
      },
      en: {
        title: 'Internet networks Course',
      },
    },
    {
      datecreated: {
        month: '05',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Fundamentos de Ingeniería de Software',
      },
      en: {
        title: 'Software Engineering Fundamentals Course',
      },
    },
    {
      datecreated: {
        month: '05',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Pensamiento Lógico',
      },
      en: {
        title: 'Logic Course',
      },
    },
    {
      datecreated: {
        month: '05',
        year: '2020',
      },
      institute: 'FreeCodeCamp',
      es: {
        title: 'Diseño Web Responsivo',
      },
      en: {
        title: 'Responsive Web Design',
      },
    },
    {
      reference: '2019',
      datecreated: {
        month: '11',
        year: '2019',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Marca Personal',
      },
      en: {
        title: 'Personal Brand Course',
      },
    },
    {
      datecreated: {
        month: '10',
        year: '2019',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso Programación Básica',
      },
      en: {
        title: 'Basic programation Course',
      },
    },
    {
      datecreated: {
        month: '02',
        year: '2019',
      },
      institute: 'Centro Venezolano Americano',
      es: {
        title: 'Inglés como Lengua Extranjera',
      },
      en: {
        title: 'English as a Foreign Language',
      },
    },
    {
      reference: '2018',
      datecreated: {
        month: '09',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de PHP Básico',
      },
      en: {
        title: 'Basic PHP Course',
      },
    },
    {
      datecreated: {
        month: '09',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de HTML 5',
      },
      en: {
        title: 'HTML 5 Course',
      },
    },
    {
      datecreated: {
        month: '09',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de Administrador de Web Hosting',
      },
      en: {
        title: 'Web Hosting Course',
      },
    },
    {
      datecreated: {
        month: '08',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de SQL',
      },
      en: {
        title: 'SQL Course',
      },
    },
    {
      reference: '2017',
      datecreated: {
        month: '09',
        year: '2017',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de Java SE',
      },
      en: {
        title: 'Java SE Course',
      },
    },
    {
      datecreated: {
        month: '03',
        year: '2017',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de Programación Estructurada',
      },
      en: {
        title: 'Structured Programming Course',
      },
    },
  ];

  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    cleanFonts();
    window.addEventListener('scroll', () => this.selectDot, true);
    const dot = document.getElementById('date2021');
    if (dot !== null) {
      dot.classList.add('dotActive');
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.selectDot, true);
  }

  selectDot(): void {
    const div2017 = document.getElementById('2017');
    const div2018 = document.getElementById('2018');
    const div2019 = document.getElementById('2019');
    const div2020 = document.getElementById('2020');
    const div2021 = document.getElementById('2021');
    if (
      div2017 != undefined &&
      div2018 != undefined &&
      div2019 != undefined &&
      div2020 != undefined &&
      div2021 != undefined
    ) {
      if (div2017.offsetTop > window.scrollY && div2018.offsetTop < window.scrollY) {
        this.resetDots('2017');
        const dot: HTMLElement = <HTMLElement>document.getElementById('date2017');
        if (dot != null) {
          dot.classList.add('dotActive');
        }
      } else if (div2018.offsetTop > window.scrollY && div2019.offsetTop < window.scrollY) {
        this.resetDots('2018');
        const dot: HTMLElement = <HTMLElement>document.getElementById('date2018');
        if (dot != null) {
          dot.classList.add('dotActive');
        }
      } else if (div2019.offsetTop > window.scrollY && div2020.offsetTop < window.scrollY) {
        this.resetDots('2019');
        const dot: HTMLElement = <HTMLElement>document.getElementById('date2019');
        if (dot != null) {
          dot.classList.add('dotActive');
        }
      } else if (div2020.offsetTop > window.scrollY && div2021.offsetTop < window.scrollY) {
        this.resetDots('2020');
        const dot: HTMLElement = <HTMLElement>document.getElementById('date2020');
        if (dot != null) {
          dot.classList.add('dotActive');
        }
      } else if (div2021.offsetTop > window.scrollY) {
        this.resetDots('2021');
        const dot: HTMLElement = <HTMLElement>document.getElementById('date2021');
        if (dot != null) {
          dot.classList.add('dotActive');
        }
      }
    }
  }

  resetDots(currentView: string): void {
    const div2017: HTMLElement = <HTMLElement>document.getElementById('date2017');
    const div2018: HTMLElement = <HTMLElement>document.getElementById('date2018');
    const div2019: HTMLElement = <HTMLElement>document.getElementById('date2019');
    const div2020: HTMLElement = <HTMLElement>document.getElementById('date2020');
    const div2021: HTMLElement = <HTMLElement>document.getElementById('date2021');
    switch (currentView) {
      case '2021':
        div2020.classList.remove('dotActive');
        div2019.classList.remove('dotActive');
        div2018.classList.remove('dotActive');
        div2017.classList.remove('dotActive');
        break;
      case '2020':
        div2021.classList.remove('dotActive');
        div2019.classList.remove('dotActive');
        div2018.classList.remove('dotActive');
        div2017.classList.remove('dotActive');
        break;
      case '2019':
        div2021.classList.remove('dotActive');
        div2020.classList.remove('dotActive');
        div2018.classList.remove('dotActive');
        div2017.classList.remove('dotActive');
        break;
      case '2018':
        div2021.classList.remove('dotActive');
        div2020.classList.remove('dotActive');
        div2019.classList.remove('dotActive');
        div2017.classList.remove('dotActive');
        break;
      case '2017':
        div2021.classList.remove('dotActive');
        div2020.classList.remove('dotActive');
        div2019.classList.remove('dotActive');
        div2018.classList.remove('dotActive');
        break;
    }
  }

  getMonth(month: string): string {
    switch (month) {
      case '01':
        return this.translate.currentLang == 'es' ? 'Enero' : 'January';
      case '02':
        return this.translate.currentLang == 'es' ? 'Febrero' : 'February';
      case '03':
        return this.translate.currentLang == 'es' ? 'Marzo' : 'March';
      case '04':
        return this.translate.currentLang == 'es' ? 'Abril' : 'April';
      case '05':
        return this.translate.currentLang == 'es' ? 'Mayo' : 'May';
      case '06':
        return this.translate.currentLang == 'es' ? 'Junio' : 'June';
      case '07':
        return this.translate.currentLang == 'es' ? 'Julio' : 'July';
      case '08':
        return this.translate.currentLang == 'es' ? 'Agosto' : 'August';
      case '09':
        return this.translate.currentLang == 'es' ? 'Septiembre' : 'September';
      case '10':
        return this.translate.currentLang == 'es' ? 'Octubre' : 'October';
      case '11':
        return this.translate.currentLang == 'es' ? 'Noviembre' : 'November';
      case '12':
        return this.translate.currentLang == 'es' ? 'Diciembre' : 'December';
      default:
        return '';
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit, OnDestroy {
  showButton: boolean = true;
  studies: any = [
    {
      reference: '2020',
      datecreated: {
        month: '08',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de API Rest'
      },
      en: {
        title: 'API Rest Course',
      }
    },
    {
      datecreated: {
        month: '08',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Laravel'
      },
      en: {
        title: 'Laravel Course',
      }
    },
    {
      datecreated: {
        month: '08',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de PHP'
      },
      en: {
        title: 'PHP Course',
      }
    },
    {
      datecreated: {
        month: '07',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de POO'
      },
      en: {
        title: 'OOP Course',
      }
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de C++'
      },
      en: {
        title: 'C++ Course',
      }
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Fundamentos de Arquitectura de Software'
      },
      en: {
        title: 'Software Architecture Fundamentals Course',
      }
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de C'
      },
      en: {
        title: 'C Course',
      }
    },
    {
      datecreated: {
        month: '06',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Redes de Internet'
      },
      en: {
        title: 'Internet networks Course',
      }
    },
    {
      datecreated: {
        month: '05',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Fundamentos de Ingeniería de Software'
      },
      en: {
        title: 'Software Engineering Fundamentals Course',
      }
    },
    {
      datecreated: {
        month: '05',
        year: '2020',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Pensamiento Lógico'
      },
      en: {
        title: 'Logic Course',
      }
    },
    {
      datecreated: {
        month: '05',
        year: '2020',
      },
      institute: 'FreeCodeCamp',
      es: {
        title: 'Diseño Web Responsivo'
      },
      en: {
        title: 'Responsive Web Design',
      }
    },
    {
      reference: '2019',
      datecreated: {
        month: '11',
        year: '2019',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso de Marca Personal'
      },
      en: {
        title: 'Personal Brand Course',
      }
    },
    {
      datecreated: {
        month: '10',
        year: '2019',
      },
      institute: 'Platzi',
      es: {
        title: 'Curso Programacion Básica'
      },
      en: {
        title: 'Basic programation Course',
      }
    },
    {
      datecreated: {
        month: '02',
        year: '2019',
      },
      institute: 'Centro Venezolano Americano',
      es: {
        title: 'Ingles como Lengua Extranjera'
      },
      en: {
        title: 'English as a Foreign Language',
      }
    },
    {
      reference: '2018',
      datecreated: {
        month: '09',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de HTML 5'
      },
      en: {
        title: 'HTML 5 Course',
      }
    },
    {
      datecreated: {
        month: '09',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de PHP Básico'
      },
      en: {
        title: 'Basic PHP Course',
      }
    },
    {
      datecreated: {
        month: '09',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de HTML 5'
      },
      en: {
        title: 'HTML 5 Course',
      }
    },
    {
      datecreated: {
        month: '09',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de Administrador de Web Hosting'
      },
      en: {
        title: 'Web Hosting Course',
      }
    },
    {
      datecreated: {
        month: '08',
        year: '2018',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de SQL'
      },
      en: {
        title: 'SQL Course',
      }
    },
    {
      reference: '2017',
      datecreated: {
        month: '09',
        year: '2017',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de Java SE'
      },
      en: {
        title: 'Java SE Course',
      }
    },
    {
      datecreated: {
        month: '03',
        year: '2017',
      },
      institute: 'Benllisoft',
      es: {
        title: 'Curso de Programación Estructurada'
      },
      en: {
        title: 'Structured Programming Course',
      }
    }
  ];
  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit() {
    window.addEventListener('scroll', (e) => this.selectDot(e), true);
    let dot = document.getElementById('date2020');
    dot.classList.add('dotActive');
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', (e) => this.selectDot(e), true);
  }

  selectDot(e){
    if(document.getElementById('2017') != undefined && document.getElementById('2018') != undefined && document.getElementById('2019') != undefined && document.getElementById('2020') != undefined){
      if(document.getElementById('2017').offsetTop > window.scrollY && document.getElementById('2018').offsetTop < window.scrollY){
        this.resetDots('2017');
        let dot = document.getElementById('date2017');
        dot.classList.add('dotActive');
      }else if(document.getElementById('2018').offsetTop  > window.scrollY && document.getElementById('2019').offsetTop < window.scrollY){
        this.resetDots('2018');
        let dot = document.getElementById('date2018');
        dot.classList.add('dotActive');
      }else if(document.getElementById('2019').offsetTop > window.scrollY && document.getElementById('2020').offsetTop < window.scrollY){
        this.resetDots('2019');
        let dot = document.getElementById('date2019');
        dot.classList.add('dotActive');
      }else if(document.getElementById('2020').offsetTop > window.scrollY){
        this.resetDots('2020');
        let dot = document.getElementById('date2020');
        dot.classList.add('dotActive');
      }
    }
  }

  resetDots(currentView: string){
    switch(currentView){
      case '2020':
        document.getElementById('date2019').classList.remove('dotActive');
        document.getElementById('date2018').classList.remove('dotActive');
        document.getElementById('date2017').classList.remove('dotActive');
        break;
      case '2019':
        document.getElementById('date2020').classList.remove('dotActive');
        document.getElementById('date2018').classList.remove('dotActive');
        document.getElementById('date2017').classList.remove('dotActive');
        break;
      case '2018':
        document.getElementById('date2020').classList.remove('dotActive');
        document.getElementById('date2019').classList.remove('dotActive');
        document.getElementById('date2017').classList.remove('dotActive');
        break;
      case '2017':
        document.getElementById('date2020').classList.remove('dotActive');
        document.getElementById('date2019').classList.remove('dotActive');
        document.getElementById('date2018').classList.remove('dotActive');
        break;
    }
  }

  getMonth(month: string){
    var stringMonth = "";
    switch (month) {
      case '01':
        stringMonth = this.translate.currentLang == "es" ? 'Enero' : 'January';
        break;
      case '02':
        stringMonth = this.translate.currentLang == "es" ? 'Febrero' : 'February';
        break;
      case '03':
        stringMonth = this.translate.currentLang == "es" ? 'Marzo' : 'March';
        break;
      case '04':
        stringMonth = this.translate.currentLang == "es" ? 'Abril' : 'April';
        break;
      case '05':
        stringMonth = this.translate.currentLang == "es" ? 'Mayo' : 'May';
        break;
      case '06':
        stringMonth = this.translate.currentLang == "es" ? 'Junio' : 'June';
        break;
      case '07':
        stringMonth = this.translate.currentLang == "es" ? 'Julio' : 'July';
        break;
      case '08':
        stringMonth = this.translate.currentLang == "es" ? 'Agosto' : 'August';
        break;
      case '09':
        stringMonth = this.translate.currentLang == "es" ? 'Septiembre' : 'September';
        break;
      case '10':
        stringMonth = this.translate.currentLang == "es" ? 'Octubre' : 'October';
        break;
      case '11':
        stringMonth = this.translate.currentLang == "es" ? 'Noviembre' : 'November';
        break;
      case '12':
        stringMonth = this.translate.currentLang == "es" ? 'Diciembre' : 'December';
        break;
    }

    return stringMonth;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { navigationCustom } from '../transition';
import { EmailService } from '../services/email/email.service';
import { cleanFonts } from '../../main';
import { ProjectHome, EmailForm, responseEmail, ExperimentType } from '../services/common';
import { I18Service } from '../services/i18n-service/i18n-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  showButton = true;
  emailSended = false;
  isLoadingBtn = false;
  showArrowLeft = false;
  showArrowRight = false;
  projects: ProjectHome[] = [
    {
      name: 'FJC Intranet',
      resume: 'fjcintranet-resume',
      route: '/FJCIntranet',
    },
    {
      name: 'ORM',
      resume: 'orm-resume',
      route: '/ormv',
    },
    {
      name: 'My Portfolio',
      resume: 'myWeb-resume',
      route: '/portfolio',
    },
    {
      name: 'AFX Trade',
      resume: 'afxtrade-resume',
      route: '/afxtrade',
    },
    {
      name: 'TraumApp',
      resume: 'traumapp-resume',
      route: '/traumapp',
    },
    {
      name: 'TraumApp Landing',
      resume: 'traumappLanding-resume',
      route: '/traumappLanding',
    },
    {
      name: 'Quipus Events',
      resume: 'quipus-resume',
      route: '/quipus',
    },
    {
      name: 'TMS',
      resume: 'tms-resume',
      route: '/tms',
    },
    {
      name: 'SOIV',
      resume: 'soiv-resume',
      route: '/soiv',
    },
    {
      name: 'TraumApp Web',
      resume: 'traumappWeb-resume',
      route: '/traumappWeb',
    },
  ];

  experiments: ExperimentType[] = [
    {
      name: 'Todo List App With React + TS',
      img: 'assets/images/experiments/todoListReactTs.png',
      url: 'https://samueldear.github.io/react-course/',
    },
    {
      name: 'TraumApp Initial Loading for Mobile',
      img: 'assets/images/experiments/traumappLoader.png',
      url: 'https://samueldear.github.io/traumapp-loader/',
    },
    {
      name: 'Movie App With React and NodeJs + ExpressJs',
      img: 'assets/images/experiments/movieApp.png',
      url: 'https://samueldear.github.io/exp-movie-frontend/#/',
    },
  ];

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(this.name, Validators.required),
    email: new FormControl(this.email, [Validators.required, Validators.email]),
    msg: new FormControl(this.msg, Validators.required),
  });

  get name() {
    return !this.contactForm ? '' : this.contactForm.get('name');
  }

  get email() {
    return !this.contactForm ? '' : this.contactForm.get('email');
  }

  get msg() {
    return !this.contactForm ? '' : this.contactForm.get('msg');
  }

  constructor(
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private formBuilder: UntypedFormBuilder,
    // eslint-disable-next-line no-unused-vars
    public emailService: EmailService,
    // eslint-disable-next-line no-unused-vars
    public translate: TranslateService,
    // eslint-disable-next-line no-unused-vars
    private i18Service: I18Service,
  ) {
    console.log('HOLAAA');
    window.scroll(0, 0);
    translate.use(this.i18Service.getLanguage());
    window.addEventListener('scroll', () => this.actionsOnScroll(), true);
  }

  actionsOnScroll(): void {
    this.animatePolygon();
    this.arrowExperiment();
  }

  ngOnInit(): void {
    cleanFonts();
    setTimeout(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element = document.getElementById(tree.fragment);
        if (element) {
          window.scrollTo(0, element.offsetTop);
        }
      }
    }, 100);

    const imgTramp = document.getElementById('imgTrap');
    if (imgTramp != null) {
      imgTramp.addEventListener('load', function () {
        this.remove();
      });
    }

    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });

    this.arrowExperiment();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.actionsOnScroll(), true);
  }

  arrowExperiment = (): void => {
    const expBox: HTMLElement = <HTMLElement>document.getElementById('expBox');
    if (expBox !== undefined) {
      setTimeout(() => {
        if (expBox.scrollLeft === 0) {
          this.showArrowLeft = false;
        } else {
          this.showArrowLeft = true;
        }

        if (expBox.scrollLeft + expBox.offsetWidth == expBox.scrollWidth) {
          this.showArrowRight = false;
        } else {
          this.showArrowRight = true;
        }
      }, 500);
    }
  };

  animatePolygon = (): void => {
    const personalIcon = document.getElementById('personalIcon');
    const svgBox = document.getElementById('personalIconSvg');
    const polygon1 = document.getElementById('polygonMain');
    const slogo = document.getElementById('slogo');
    if (personalIcon != null && personalIcon != undefined && svgBox != null && polygon1 != null && slogo != null) {
      const screenPos = window.scrollY + window.innerHeight;
      svgBox.style.transition = '3s';

      if (screenPos > personalIcon.offsetTop) {
        const definitiveHeight = (screenPos - personalIcon.offsetTop) * 0.003;
        polygon1.setAttribute(
          'transform',
          `matrix(${definitiveHeight > 1 ? 1 : definitiveHeight}, 0, 0, ${
            definitiveHeight > 1 ? 1 : definitiveHeight
          }, ${definitiveHeight > 1 ? 0 : 100 - (definitiveHeight * 100) / 1}, ${
            definitiveHeight > 1 ? 0 : 100 - (definitiveHeight * 100) / 1
          })`,
        );
        slogo.setAttribute(
          'transform',
          `matrix(${definitiveHeight > 1 ? 1 : definitiveHeight},
            0,
            0,
            ${definitiveHeight > 1 ? 1 : definitiveHeight},
            ${definitiveHeight > 1 ? 0 : 100 - (definitiveHeight * 100) / 1},
            ${definitiveHeight > 1 ? 0 : 100 - (definitiveHeight * 100) / 1}
          )`,
        );

        setTimeout(() => {
          svgBox.style.opacity = '1';
        }, 500);
      } else {
        polygon1.setAttribute('transform', `matrix(0.0000000001, 0, 0, 0.0000000001, 100, 100)`);
        slogo.setAttribute('transform', `matrix(0.0000000001, 0, 0, 0.0000000001, 100, 100)`);
        setTimeout(() => {
          svgBox.style.opacity = '0';
        }, 500);
      }
    }
  };

  navigation(ruta: string): void {
    navigationCustom(() => this.router.navigateByUrl(ruta));
  }

  experimentScroll(dir: string): void {
    const expBox: HTMLElement = <HTMLElement>document.getElementById('expBox');

    if (dir === 'right') {
      expBox.scrollTo({ left: expBox.offsetWidth + expBox.scrollLeft, behavior: 'smooth' });
    } else {
      expBox.scrollTo({ left: expBox.scrollLeft - expBox.offsetWidth, behavior: 'smooth' });
    }

    setTimeout(() => {
      if (expBox.scrollLeft === 0) {
        this.showArrowLeft = false;
      } else {
        this.showArrowLeft = true;
      }

      if (expBox.scrollLeft + expBox.offsetWidth == expBox.scrollWidth) {
        this.showArrowRight = false;
      } else {
        this.showArrowRight = true;
      }
    }, 500);
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.emailSended && !this.isLoadingBtn) {
      this.isLoadingBtn = true;
      const values = this.contactForm.value;

      const params: EmailForm = {
        name: values.name,
        email: values.email,
        dsc: values.msg,
      };

      this.emailService.sendContact(params).subscribe(
        (rsp: responseEmail) => {
          if (rsp !== null) {
            this.emailSended = true;
            this.isLoadingBtn = false;
          }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error: any) => {
          // eslint-disable-next-line no-console
          error !== null && console.log(error);
          this.isLoadingBtn = false;
        },
      );
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { navigationCustom } from '../transition';
import { EmailService } from '../services/email/email.service';
import { cleanFonts } from '../../main';
import { ProjectHome, emailForm, responseEmail } from '../services/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  showButton = true;
  emailSended = false;
  isLoadingBtn = false;
  projects: ProjectHome[] = [
    {
      name: 'FJC Intranet',
      resume: 'fjcintranet.resume',
      route: '/FJCIntranet',
    },
    {
      name: 'ORM',
      resume: 'orm.resume',
      route: '/ormv',
    },
    {
      name: 'My Portfolio',
      resume: 'myWeb.resume',
      route: '/portfolio',
    },
    {
      name: 'AFX Trade',
      resume: 'afxtrade.resume',
      route: '/afxtrade',
    },
    {
      name: 'TraumApp',
      resume: 'traumapp.resume',
      route: '/traumapp',
    },
  ];

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    msg: ['', Validators.required],
  });

  constructor(
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private formBuilder: FormBuilder,
    // eslint-disable-next-line no-unused-vars
    public emailService: EmailService,
  ) {
    window.scroll(0, 0);
    window.addEventListener('scroll', () => this.animatePolygon(), true);
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
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.animatePolygon(), true);
  }

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

  onSubmit(): void {
    if (this.contactForm.valid && !this.emailSended && !this.isLoadingBtn) {
      this.isLoadingBtn = true;
      const values = this.contactForm.value;
      const params: emailForm = {
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

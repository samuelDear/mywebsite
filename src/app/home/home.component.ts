import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { navigationCustom } from '../transition';
import { EmailService } from '../services/email/email.service';
import { emailForm, responseEmail } from '../services/common/email';
import { cleanFonts } from '../../main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  showButton: boolean = true;
  emailSended: boolean = false;
  isLoadingBtn: boolean = false;
  projects: any = [
    {
      name: 'FJC Intranet',
      es: {
        resume: 'Es un sistema interno de página única(SPA). Creado con Angular 8 y Java Spring, para la gestión documental y de hallazgos en la Fundación Jacinto Convit. Un sitio web que cuenta con estándares internacionales y bajo el estándar ISO 9001.'
      },
      en: {
        resume: 'It is an internal single page system (SPA). Created with Angular 8 and Java Spring Boot, for document and discovery management at the Fundacion Jacinto Convit. A website that has international standards and under the ISO 9001 standard.'
      },
      route: '/FJCIntranet'
    },
    {
      name: 'ORM',
      es: {
        resume: 'Es una página web creada con HTML5, CSS3, JS y PHP. un sitio web responsivo con un diseño cómodo para facilitar la experiencia del usuario y de un alto rendimiento. Creado para facilitar a los colegios de Venezuela la inscripción a las Olimpiadas Recreativas de Matemáticas.'
      },
      en: {
        resume: 'It is a web page created with HTML5, CSS3, JS and PHP. a responsive website with a comfortable design to facilitate the user experience and high performance. Created to make it easier for schools in Venezuela to register for the Mathematical Recreation Olympics.'
      },
      route: '/ormv'
    },
    {
      name: 'My Portfolio',
      es: {
        resume: 'Es un sitio web de página única(SPA). Con un alto rendimiento, un sitio web responsivo que utiliza animaciones potentes. También, usa el poder de los SVG para enriquecer la experiencia del usuario.'
      },
      en: {
        resume: "A website that is a Single-page application(SPA). With a high-performance, responsive website that uses powered animations. As also, uses the creative SVG's power for enriching user experience."
      },
      route: '/portfolio'
    },
    {
      name: 'AFX Trade',
      es: {
        resume: 'Es una aplicación web creada con HTML5, CSS3, JS y PHP. Un exchange de criptomonedas Venezolano en el cual podremos trabajar con diferentes criptomonedas como BTC, USDT, PTR y más. Con una interfaz cómoda permitiendo que cualquier usuario pueda utilizarla. Ademas, con un manejo único para cada moneda.'
      },
      en: {
        resume: 'It is a web application created with HTML5, CSS3, JS and PHP. A Venezuelan cryptocurrency exchange in which we can work with different cryptocurrencies such as BTC, USDT, PTR and more. With a comfortable interface allowing any user to use it. In addition, with a unique handling for each currency.'
      },
      route: '/afxtrade'
    }
  ];

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    msg: ['',Validators.required]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public emailService: EmailService,
    public translate: TranslateService
  ) {
    window.scroll(0,0);
    window.addEventListener('scroll', (e) => this.animatePolygon(e), true);
  }

  ngOnInit() {
    cleanFonts();
    setTimeout(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element = document.getElementById(tree.fragment);
        if (element) { window.scrollTo(0, (element.offsetTop )); }
      }
    },100);

    let imgTramp = document.getElementById('imgTrap');
    if (imgTramp != null) {
      imgTramp.addEventListener("load",function(){
        this.remove();
      });
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', (e) => this.animatePolygon(e), true);
  }

  animatePolygon = (e: any) => {
    const personalIcon = document.getElementById('personalIcon');
    const svgBox = document.getElementById('personalIconSvg');
    const polygon1 = document.getElementById('polygonMain');
    const slogo = document.getElementById('slogo');
    if(personalIcon != null && personalIcon != undefined && svgBox != null && polygon1 != null && slogo != null){
      let screenPos = window.scrollY + window.innerHeight;
      svgBox.style.transition = '3s';

      if(screenPos > personalIcon.offsetTop){
        let definitiveHeight = ((screenPos - personalIcon.offsetTop) * 0.003);
        polygon1.setAttribute("transform",`matrix(${definitiveHeight > 1 ? 1 : definitiveHeight}, 0, 0, ${definitiveHeight > 1 ? 1 : definitiveHeight}, ${definitiveHeight > 1 ? 0 : 100 -((definitiveHeight * 100) / 1)}, ${definitiveHeight > 1 ? 0 : 100 -((definitiveHeight * 100) / 1)})`);
        slogo.setAttribute("transform",`matrix(${definitiveHeight > 1 ? 1 : definitiveHeight}, 0, 0, ${definitiveHeight > 1 ? 1 : definitiveHeight}, ${definitiveHeight > 1 ? 0 : 100 -((definitiveHeight * 100) / 1)}, ${definitiveHeight > 1 ? 0 : 100 -((definitiveHeight * 100) / 1)})`);
        
        setTimeout(() => {
          svgBox.style.opacity = '1';
        }, 500);

      }else{
        polygon1.setAttribute("transform",`matrix(0.0000000001, 0, 0, 0.0000000001, 100, 100)`);
        slogo.setAttribute("transform",`matrix(0.0000000001, 0, 0, 0.0000000001, 100, 100)`);
        setTimeout(() => {
          svgBox.style.opacity = '0';
        }, 500);
      }
    }
  }

  navigation(ruta: string): void {
    navigationCustom( () => this.router.navigateByUrl(ruta) ); 
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
          this.emailSended = true;
          this.isLoadingBtn = false;
        },
        (error: any) => {
          this.isLoadingBtn = false;
        }
      )
    }
  }
}

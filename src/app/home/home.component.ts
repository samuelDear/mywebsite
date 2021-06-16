import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { navigationCustom } from '../transition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  showButton: boolean = true;
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
    }/*,
    {
      name: 'Traumapp',
      es: {
        resume: 'Es una aplicación móvil multiplataforma desarrollada con React Native. Cuenta con una interfaz comoda para el usuario para un uso diario. Creada para optimizar una consulta medica y el manejo de la informacion de los pacientes.'
      },
      en: {
        resume: 'It is a multiplatform mobile application developed with React Native. It has a comfortable interface for the user for a daily use. Created to optimize a medical consultation and the management of patient information.'
      },
      route: ''
    },
    {
      name: 'Traumapp for Desktop',
      es: {
        resume: 'Es una aplicacion de escritorio multiplataforma creada con Angular y Electron. Esta fue creada para que los usuarios de Traumapp, pudieran tener accesso a ella desde una PC.'
      },
      en: {
        resume: 'It is a cross-platform desktop application created with Angular and Electron. This was created so that Traumapp users could access it from a PC.'
      },
      route: ''
    },
    {
      name: 'AFX Exchange',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      },
      route: ''
    }*/
  ];

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {
    window.scroll(0,0);
    window.addEventListener('scroll', (e) => this.animatePolygon(e), true);
  }

  animatePolygon = (e: any) => {
    //console.log(window.scrollY + window.innerHeight);
    //console.log(document.getElementById('personalIcon'));
    const personalIcon = document.getElementById('personalIcon');
    const svgBox = document.getElementById('personalIconSvg');
    const polygon1 = document.getElementById('polygonMain');
    const slogo = document.getElementById('slogo');
    if(personalIcon != null && personalIcon != undefined && svgBox != null && polygon1 != null && slogo != null){
      let screenPos = (window.scrollY + window.innerHeight);

      let elOffset = personalIcon.offsetTop;

      svgBox.style.transition = '3s';

      if(screenPos > (elOffset)){
        let definitiveHeight = ((screenPos - elOffset) * 0.003);
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

  ngOnInit() {
    let links = document.getElementsByClassName('font-link');
    for(let i = links.length - 1; i >= 0; i--){
      links[i].remove();
    }

    let styles = document.getElementsByClassName('font-style');
    for(let i = styles.length - 1; i >= 0; i--){
      styles[i].remove();
    }
    setTimeout(() => {
      const tree = this.router.parseUrl(this.router.url);
    if (tree.fragment) {
      const element = document.getElementById(tree.fragment);
      //console.log(element.offsetTop);
      if (element) { window.scrollTo(0, (element.offsetTop )); }
    }
    },100);

    let imgTramp = document.getElementById('imgTrap');
    if (imgTramp != null) {
      imgTramp.addEventListener("load",function(){
        //console.log("ya me cargue");
        this.remove();
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', (e) => this.animatePolygon(e), true);
  }

  navigation(ruta: string) {
    navigationCustom( () => this.router.navigateByUrl(ruta) ); 
  }
}

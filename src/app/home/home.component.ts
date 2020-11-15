import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { navigationCustom } from '../transition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showButton: boolean = true;
  projects: any = [
    {
      name: 'FJC Intranet',
      es: {
        resume: 'Es un sistema interno de pagina unica(SPA). Creado con Angular 8 y Java Spring Boot, para la gestion documental y de hallazgos en la Fundacion Jacinto Convit. Un sitio web que cuenta con estandares internacionales y bajo el estandar ISO 9001.'
      },
      en: {
        resume: 'It is an internal single page system (SPA). Created with Angular 8 and Java Spring Boot, for document and discovery management at the Fundacion Jacinto Convit. A website that has international standards and under the ISO 9001 standard.'
      },
      route: '/FJCIntranet'
    },
    {
      name: 'ORM',
      es: {
        resume: 'Es una pagina web creada con HTML5, CSS3, JS y PHP. un sitio web responsivo con un diseño comodo para facilitar la experiencia del usuario y de un alto rendimiento. Creado para facilitar a los colegios de Venezuela la inscripcion a las Olimpiadas Recreativas Matematicas.'
      },
      en: {
        resume: 'It is a web page created with HTML5, CSS3, JS and PHP. a responsive website with a comfortable design to facilitate the user experience and high performance. Created to make it easier for schools in Venezuela to register for the Mathematical Recreation Olympics.'
      },
      route: '/ormv'
    },
    {
      name: 'My Portfolio',
      es: {
        resume: 'Es un sitio web de pagina unica(SPA). Con un alto rendimiento, un sitio web responsivo que utiliza animaciones potentes. Tambien, usa el poder de los SVG para enriquecer la experiencia del usuario.'
      },
      en: {
        resume: "A website that is a Single-page application(SPA). With a high-performance, responsive website that uses powered animations. As also, uses the creative SVG's power for enriching user experience."
      },
      route: ''
    },
    {
      name: 'Traumapp',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      },
      route: ''
    },
    {
      name: 'Traumapp for Desktop',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
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
    }
  ];

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {
    window.scroll(0,0);
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
      console.log(element.offsetTop);
      if (element) { window.scrollTo(0, (element.offsetTop )); }
    }
    },100)
    
  }

  navigation(ruta) {
    navigationCustom( () => this.router.navigateByUrl(ruta) ); 
  }
}

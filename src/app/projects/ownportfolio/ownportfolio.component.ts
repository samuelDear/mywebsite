import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router} from '@angular/router';
import { navigationCustom } from '../../transition';

@Component({
  selector: 'app-ownportfolio',
  templateUrl: './ownportfolio.component.html',
  styles: ['.boxUnique{ border: 2px solid #db2696}']
})
export class OwnportfolioComponent implements OnInit {
  families = [{name: "Signika", link: `https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap`},
    { name: "monospace", link: "" }];
  ramdons = [
    {
      code: '/FJCIntranet',
      name: 'FJC Intranet',
      es: {
        resume: 'Es un sistema interno de página única(SPA). Creado con Angular 8 y Java Spring, para la gestión documental y de hallazgos en la Fundación Jacinto Convit. Un sitio web que cuenta con estándares internacionales y bajo el estándar ISO 9001.'
      },
      en: {
        resume: 'It is an internal single page system (SPA). Created with Angular 8 and Java Spring Boot, for document and discovery management at the Fundacion Jacinto Convit. A website that has international standards and under the ISO 9001 standard.'
      },
    },
    {
      code: '/ormv',
      name: 'ORM',
      es: {
        resume: 'Es una página web creada con HTML5, CSS3, JS y PHP. un sitio web responsivo con un diseño cómodo para facilitar la experiencia del usuario y de un alto rendimiento. Creado para facilitar a los colegios de Venezuela la inscripción a las Olimpiadas Recreativas de Matemáticas.'
      },
      en: {
        resume: 'It is a web page created with HTML5, CSS3, JS and PHP. a responsive website with a comfortable design to facilitate the user experience and high performance. Created to make it easier for schools in Venezuela to register for the Mathematical Recreation Olympics.'
      },
    },
  ];

  constructor(
    public translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.families.forEach((element, index) => {
      //console.log(element, index);
      this.fontLoader(element);
      let div = document.getElementById(`typographyName${index+1}`);
      if(div != undefined){
        div.innerHTML = element.name;
        div.style.fontFamily = element.name;
      };

      if(div != undefined){
        div.style.fontFamily = element.name;
      };
    });
  }

  fontLoader = (param: any) => {
    var headID = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = "link" + param.name;

    headID.appendChild(link);

    link.href = param.link;
  }

  navigateUrl(code: string){
    //console.log(code);
    navigationCustom( () => this.router.navigate([code]) ); 
  }

}

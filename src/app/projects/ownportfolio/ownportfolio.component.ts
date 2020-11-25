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
      en: {
        resume: 'It is an internal single page system (SPA). Created with Angular 8 and Java Spring, for document and discovery management at the Jacinto Convit Foundation. A website that has international standards and under the ISO 9001 standard.'
      },
      es: {
        resume: 'Es un sistema interno de pagina unica(SPA). Creado con Angular 8 y Java Spring, para la gestion documental y de hallazgos en la Fundacion Jacinto Convit. Un sitio web que cuenta con estandares internacionales y bajo el estandar ISO 9001.'
      }
    },
    {
      code: '/ormv',
      name: 'ORM',
      en: {
        resume: 'It is a web page created with HTML5, CSS3, JS and PHP. Created to make it easier for schools in Venezuela to register for the Recreational Mathematics Olympics.'
      },
      es: {
        resume: 'Es una pagina web creada con HTML5, CSS3, JS y PHP. Creado para facilitar a los colegios de Venezuela la inscripcion a las Olimpiadas Recreativas de Matematicas.'
      }
    },
  ];

  constructor(
    public translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.families.forEach((element, index) => {
      console.log(element, index);
      this.fontLoader(element);

      if(document.getElementById(`typographyName${index+1}`) != undefined){
        document.getElementById(`typographyName${index+1}`).innerHTML = element.name;
        document.getElementById(`typographyName${index+1}`).style.fontFamily = element.name;
      };

      if(document.getElementById(`typographyExample${index+1}`) != undefined){
        document.getElementById(`typographyExample${index+1}`).style.fontFamily = element.name;
      };
    });
  }

  fontLoader = (param) => {
    var headID = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = "link" + param.name;

    headID.appendChild(link);

    link.href = param.link;
  }

  navigateUrl(code: string){
    console.log(code);
    navigationCustom( () => this.router.navigate([code]) ); 
  }

}

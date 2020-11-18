import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router} from '@angular/router';
import { navigationCustom } from '../../transition';
@Component({
  selector: 'app-orm',
  templateUrl: './orm.component.html',
  styles: [
  ]
})
export class OrmComponent implements OnInit {
  families = [{name: 'Monserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap`},
    {name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap`}];
  ramdons = [
    {
      code: '/FJCintranet',
      name: 'FJC Intranet',
      en: {
        resume: 'It is an internal single page system (SPA). Created with Angular 8 and Java Spring, for document and discovery management at the Jacinto Convit Foundation. A website that has international standards and under the ISO 9001 standard.'
      },
      es: {
        resume: 'Es un sistema interno de pagina unica(SPA). Creado con Angular 8 y Java Spring, para la gestion documental y de hallazgos en la Fundacion Jacinto Convit. Un sitio web que cuenta con estandares internacionales y bajo el estandar ISO 9001.'
      }
    },
    {
      code: '',
      name: 'My Portafolio',
      en: {
        resume: "A website that is a Single-page application(SPA). With a high-performance, responsive website that uses powered animations. As also, uses the creative SVG's power for enriching user experience."
      },
      es: {
        resume: "Es un sitio web de pagina unica(SPA). Con un alto rendimiento, un sitio web responsivo que utiliza animaciones potentes. Tambien, usa el poder de los SVG para enriquecer la experiencia del usuario."
      }
    },
    {
      code: '',
      name: 'Traumapp',
      es: {
        resume: 'Es una aplicación móvil multiplataforma desarrollada con React Native. Cuenta con una interfaz comoda para el usuario para un uso diario. Creada para optimizar una consulta medica y el manejo de la informacion de los pacientes.'
      },
      en: {
        resume: 'It is a multiplatform mobile application developed with React Native. It has a comfortable interface for the user for a daily use. Created to optimize a medical consultation and the management of patient information.'
      }
    }
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

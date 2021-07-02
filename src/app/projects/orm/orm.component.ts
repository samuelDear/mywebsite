import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router} from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';

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
      code: '',
      name: 'My Portafolio',
      es: {
        resume: 'Es un sitio web de página única(SPA). Con un alto rendimiento, un sitio web responsivo que utiliza animaciones potentes. También, usa el poder de los SVG para enriquecer la experiencia del usuario.'
      },
      en: {
        resume: "A website that is a Single-page application(SPA). With a high-performance, responsive website that uses powered animations. As also, uses the creative SVG's power for enriching user experience."
      },
    }
  ];

  constructor(
    public translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.families.forEach((element, index) => {
      //console.log(element, index);
      fontLoader(element);
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

  navigateUrl(code: string){
    //console.log(code);
    navigationCustom( () => this.router.navigate([code]) ); 
  }
}

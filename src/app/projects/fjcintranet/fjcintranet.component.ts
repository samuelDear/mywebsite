import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fjcintranet',
  templateUrl: './fjcintranet.component.html',
  styles: [
  ]
})
export class FjcintranetComponent implements OnInit {
  families = [{name: 'Oswald', link: `https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap`},
  {name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap`}];
  ramdons = [
    {
      code: '/ormv',
      name: 'ORM',
      en: {
        resume: 'It is a web page created with HTML5, CSS3, JS and PHP. Created to make it easier for schools in Venezuela to register for the Mathematical Recreation Olympics.'
      },
      es: {
        resume: 'Es una pagina web creada con HTML5, CSS3, JS y PHP. Creado para facilitar a los colegios de Venezuela la inscripcion a las Olimpiadas Recreativas Matematicas.'
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
      en: {
        resume: 'It is a web page created.'
      },
      es: {
        resume: 'Es una pagina web creada.'
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
    this.router.navigate([code]);
  }
}

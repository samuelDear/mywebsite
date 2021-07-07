import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router} from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';

const threshold = 0.1;
@Component({
  selector: 'app-fjcintranet',
  templateUrl: './fjcintranet.component.html',
  styleUrls: ['./fjcintranet.component.scss']
})
export class FjcintranetComponent implements OnInit {
  families = [{name: 'Oswald', link: `https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap`},
  {name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap`}];
  ramdons = [
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
        const logoJacintoConvit = document.getElementById('logoJacintoConvit');
        logoJacintoConvit !== null && this.createObserver(logoJacintoConvit);

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

    createObserver(element: HTMLElement): void {
        let options = {
            threshold: threshold,
        }
    
        const observer = new IntersectionObserver(this.handleIntersection, options);
    
        observer.observe(element);
    }

  handleIntersection(entries: any): void{
    const entry = entries[0];
    console.log(entries);
    const isVisible = entry.intersectionRatio >= threshold;
    if (isVisible) {
        entry.target.classList.remove('showLogo');
    } else if(entry.target.offsetTop > window.scrollY){
        entry.target.classList.add('showLogo');
    }
}

  navigateUrl(code: string){
    //console.log(code);
    navigationCustom( () => this.router.navigate([code]) ); 
  }
}

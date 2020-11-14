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
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      },
      route: '/FJCIntranet'
    },
    {
      name: 'ORM',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      },
      route: '/ormv'
    },
    {
      name: 'My Portfolio',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
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

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
      }
    },
    {
      name: 'ORM',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      }
    },
    {
      name: 'My Portfolio',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      }
    },
    {
      name: 'Traumapp',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      }
    },
    {
      name: 'Traumapp for Desktop',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      }
    }
    ,
    {
      name: 'AFX Exchange',
      es: {
        resume: 'RESUMEN WEON'
      },
      en: {
        resume: 'THIS IS A RESUME'
      }
    }
  ];

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {
    window.scroll(0,0);
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
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
  }

  navigation(ruta) {
    navigationCustom( () => this.router.navigateByUrl(ruta) ); 
  }
}

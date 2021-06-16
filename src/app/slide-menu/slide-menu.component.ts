import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { navigationCustom } from '../transition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
  showButton: boolean = false;
  nav: boolean = true;
  currentLang: string;
  constructor(
    public translate: TranslateService,
    public router: Router
  ) {
    window.scroll(0,0);
    if(translate.currentLang == "es"){
      this.currentLang = "es";
    }else{
      this.currentLang = "en";
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
  }

  navigation(ruta: string) {
    navigationCustom( () => this.router.navigateByUrl(ruta) ); 
  }

  navigationFragment(ruta: string, fragment: string) {
    navigationCustom( () => this.router.navigate([ruta], { fragment: fragment }) ); 
  }
}

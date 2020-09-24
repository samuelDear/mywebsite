import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

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
    public translate: TranslateService
  ) {
    window.scroll(0,0);
    console.log(translate.currentLang);
    if(translate.currentLang == "es"){
      this.currentLang = "es";
      console.log("españolo");
    }else{
      this.currentLang = "en";
      console.log("inglish");
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
}

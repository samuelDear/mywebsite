import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
  showButton: boolean = false;
  currentLang: string;
  constructor(public translate: TranslateService) {
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
  }

}

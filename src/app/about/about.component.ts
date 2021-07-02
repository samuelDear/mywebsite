import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { cleanFonts } from '../../main';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  showButton: boolean = false;
  constructor(public translate: TranslateService) {
    window.scroll(0,0);
  }

  ngOnInit() {
    cleanFonts();
  }

  downloadCv(){
    if(this.translate.currentLang == "es"){
      window.open('assets/cv/SamuelRojasEsp.pdf', '_blank');
    }else{
      window.open('assets/cv/SamuelRojasEng.pdf', '_blank');
    }
  }
}

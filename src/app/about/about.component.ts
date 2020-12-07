import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

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
    let links = document.getElementsByClassName('font-link');
    for(let i = links.length - 1; i >= 0; i--){
      links[i].remove();
    }

    let styles = document.getElementsByClassName('font-style');
    for(let i = styles.length - 1; i >= 0; i--){
      styles[i].remove();
    }
  }

  downloadCv(){
    if(this.translate.currentLang == "es"){
      window.open('assets/cv/SamuelRojasEsp.pdf', '_blank');
    }else{
      window.open('assets/cv/SamuelRojasEng.pdf', '_blank');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { cleanFonts } from '../../main';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  showButton = false;
  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService) {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    cleanFonts();
  }

  downloadCv(): void {
    window.open(`assets/cv/SamuelRojas${this.translate.currentLang == 'es' ? 'Esp' : 'Eng'}.pdf`, '_blank');
  }
}

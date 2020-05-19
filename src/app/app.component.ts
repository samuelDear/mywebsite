import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav: boolean;
  buttonShow: boolean;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  showButton(show){
    console.log(show);
    this.buttonShow = show.showButton;
    this.nav = show.nav;
  }

}

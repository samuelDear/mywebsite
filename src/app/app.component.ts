import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nav: boolean;
  buttonShow: boolean;
  loading: boolean = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  showButton(show){
    this.buttonShow = show.showButton;
    this.nav = show.nav;
  }
}

import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  buttonShow: boolean;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  showButton(show: boolean){
    console.log(show);
    this.buttonShow = show;
  }

}

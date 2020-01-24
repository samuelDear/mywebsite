import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showAbout: boolean;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() { }

}

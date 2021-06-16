import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { Router } from "@angular/router";
import { navigationCustom } from './transitionPopstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nav: boolean = true;
  buttonShow: boolean = true;
  loading: boolean = false;

  constructor(public translate: TranslateService, router: Router) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

    router.events
			.pipe(
				// The "events" stream contains all the navigation events. For this demo,
				// though, we only care about the NavigationStart event as it contains
				// information about what initiated the navigation sequence.
				filter(
					( event: NavigationEvent ) => {
						return( event instanceof NavigationStart );
					}
				)
			)
			.subscribe(
				( evento: any ) => {
          if(evento.navigationTrigger == "popstate"){
            navigationCustom( () => router.navigateByUrl(evento.url) ); 
          }
				}
			);
  }

  showButton(show: any){
    this.buttonShow = show.showButton;
    this.nav = show.nav;
  }
}

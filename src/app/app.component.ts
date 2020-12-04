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
  nav: boolean;
  buttonShow: boolean;
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
				( event: NavigationStart ) => {

					console.group( "NavigationStart Event" );
					// Every navigation sequence is given a unique ID. Even "popstate"
					// navigations are really just "roll forward" navigations that get
					// a new, unique ID.
					console.log( "navigation id:", event.id );
					console.log( "route:", event.url );
					// The "navigationTrigger" will be one of:
					// --
					// - imperative (ie, user clicked a link).
					// - popstate (ie, browser controlled change such as Back button).
					// - hashchange
					// --
					// NOTE: I am not sure what triggers the "hashchange" type.
          console.log( "trigger:", event.navigationTrigger );
          
          if(event.navigationTrigger == "popstate"){
            navigationCustom( () => router.navigateByUrl(event.url) ); 
          }
					// This "restoredState" property is defined when the navigation
					// event is triggered by a "popstate" event (ex, back / forward
					// buttons). It will contain the ID of the earlier navigation event
					// to which the browser is returning.
					// --
					// CAUTION: This ID may not be part of the current page rendering.
					// This value is pulled out of the browser; and, may exist across
					// page refreshes.
					if ( event.restoredState ) {

						console.warn(
							"restoring navigation id:",
							event.restoredState.navigationId
						);

					}

					console.groupEnd();

				}
			);
  }

  showButton(show){
    this.buttonShow = show.showButton;
    this.nav = show.nav;
  }
}

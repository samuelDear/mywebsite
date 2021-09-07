import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { deleteTypo } from 'src/main';
import { navigationCustom } from '../../transition';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showAbout = false;
  @Input() headerNav = false;
  showHeader = false;

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.showHeader = true;

        deleteTypo();

        if (this.headerNav) {
          this.animation();
        }

        setTimeout(() => {
          const button = document.getElementsByClassName('hamburguer')[0];
          if (button != undefined) {
            if (!button.classList.contains('bt-menu-open') && this.router.url == '/menu') {
              button.classList.toggle('bt-menu-open');
            }
          }
        }, 10);
      }
    });
  }

  // eslint-disable-next-line
  ngOnInit(): void {}

  navigation(ruta: string): void {
    if (this.router.url != '/menu') {
      this.animation();
      navigationCustom(() => this.router.navigateByUrl(ruta));
    }
  }

  navigationAbout(ruta: string): void {
    navigationCustom(() => this.router.navigateByUrl(ruta));
  }

  animation(): void {
    const button = document.getElementsByClassName('hamburguer')[0];
    if (button != undefined) {
      button.classList.toggle('bt-menu-open');
    }
  }
}

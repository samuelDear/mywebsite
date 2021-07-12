import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  showFooter = '';

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        if (this.router.url == '/about') {
          this.showFooter = '';
        } else {
          this.showFooter = 'show';
        }
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}

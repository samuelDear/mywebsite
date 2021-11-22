import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navigationCustom } from 'src/app/transition';

@Component({
  selector: 'app-thanks-reading',
  templateUrl: './thanks-reading.component.html',
})
export class ThanksReadingComponent {
  // eslint-disable-next-line
  constructor(private router: Router) {}

  navigationAbout(ruta: string): void {
    navigationCustom(() => this.router.navigateByUrl(ruta));
  }
}

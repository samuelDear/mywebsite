import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from 'src/app/services/common';
import { navigationCustom } from '../../transition';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
})
export class MoreProjectsComponent {
  @Input() projects: Project[] = [];

  // eslint-disable-next-line
  constructor(public router: Router) {}

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }
}

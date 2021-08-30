import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from 'src/app/services/common';
import { navigationCustom } from '../../transition';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
})
export class MoreProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];

  // eslint-disable-next-line
  constructor(public router: Router) {}

  // eslint-disable-next-line
  ngOnInit(): void {}

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }
}

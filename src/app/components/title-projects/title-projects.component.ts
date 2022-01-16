import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navigationCustom } from 'src/app/transition';

@Component({
  selector: 'app-title-projects',
  templateUrl: './title-projects.component.html',
  styleUrls: ['./title-projects.component.scss'],
})
export class TitleProjectsComponent {
  @Input() projectName = '';
  @Input() dsc = '';
  @Input() role = '';
  @Input() agency = '';
  @Input() date = '';
  @Input() buttonType = '';
  @Input() projectLink = '';

  // eslint-disable-next-line
  constructor(public router: Router) {}

  navigateToHome(): void {
    navigationCustom(() => this.router.navigate(['/']));
  }
}

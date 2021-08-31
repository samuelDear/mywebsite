import { Component, OnInit } from '@angular/core';

import { Project } from '../../services/common';

@Component({
  selector: 'app-quipus',
  templateUrl: './quipus.component.html',
  styleUrls: ['./quipus.component.scss'],
})
export class QuipusComponent implements OnInit {
  ramdons: Project[] = [
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade.resume',
    },
    {
      name: 'TraumApp',
      code: '/traumapp',
      resume: 'traumapp.resume',
    },
    {
      code: '/traumapp-landing',
      name: 'TraumApp Landing',
      resume: 'traumappLanding.resume',
    },
  ];

  constructor() {
    window.scroll(0, 0);
  }

  // eslint-disable-next-line
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

import { fontLoader } from '../../../main';
import { ColorType, Font } from '../../services/common';

@Component({
  selector: 'app-traumapp-landing',
  templateUrl: './traumapp-landing.component.html',
  styleUrls: ['./traumapp-landing.component.scss'],
})
export class TraumappLandingComponent implements OnInit {
  families: Font[] = [
    { name: 'Monserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
  ];

  colors: ColorType[] = [
    {
      dsc: '#002854',
    },
    {
      dsc: '#2C023E',
    },
    {
      dsc: '#61B0E4',
    },
    {
      dsc: '#64068D',
    },
  ];

  constructor() {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.families.forEach((element, index) => {
        fontLoader(element);
        const div = document.getElementById(`typographyName${index + 1}`);
        if (div !== null) {
          div.innerHTML = element.name;
          div.style.fontFamily = element.name;
        }
      });
    }, 100);
  }
}

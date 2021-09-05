import { Component, OnInit } from '@angular/core';

import { ColorType, Font, Project } from '../../services/common';

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

  familiesJgh: Font[] = [
    { name: 'Monserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
  ];

  familiesOscars: Font[] = [
    { name: 'Open Sans', link: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  familiesMiss: Font[] = [
    { name: 'Monserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  familiesCopas: Font[] = [
    { name: 'Monserrat', link: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  colorsJgh: ColorType[] = [
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
  ];

  colorsOscars: ColorType[] = [
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
  ];

  colorsMiss: ColorType[] = [
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
  ];

  colorsCopas: ColorType[] = [
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
    {
      dsc: '',
    },
  ];

  constructor() {
    window.scroll(0, 0);
  }

  // eslint-disable-next-line
  ngOnInit(): void {}
}

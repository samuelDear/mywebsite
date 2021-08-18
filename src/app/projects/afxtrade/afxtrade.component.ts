import { Component, OnInit } from '@angular/core';

import { fontLoader } from '../../../main';
import { Font, Project, FeatureType, ColorType } from '../../services/common';

const threshold = 0.1;
@Component({
  selector: 'app-afxtrade',
  templateUrl: './afxtrade.component.html',
  styleUrls: ['./afxtrade.component.scss'],
})
export class AfxtradeComponent implements OnInit {
  families: Font[] = [
    { name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap` },
    { name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap` },
  ];

  features: FeatureType[] = [
    {
      title: 'afxtrade.featuretitle1',
      dsc: 'afxtrade.feature1',
    },
    {
      title: 'afxtrade.featuretitle2',
      dsc: 'afxtrade.feature2',
    },
    {
      title: 'afxtrade.featuretitle3',
      dsc: 'afxtrade.feature3',
    },
    {
      title: 'afxtrade.featuretitle4',
      dsc: 'afxtrade.feature4',
    },
    {
      title: 'afxtrade.featuretitle5',
      dsc: 'afxtrade.feature5',
    },
    {
      title: 'afxtrade.featuretitle6',
      dsc: 'afxtrade.feature6',
    },
  ];

  ramdons: Project[] = [
    {
      code: '/ormv',
      name: 'ORM',
      resume: 'orm.resume',
    },
    {
      code: '',
      name: 'My Portafolio',
      resume: 'myWeb.resume',
    },
    {
      name: 'TraumApp',
      code: '/traumapp',
      resume: 'traumapp.resume',
    },
  ];

  colors: ColorType[] = [
    {
      dsc: '#4287CE',
    },
    {
      dsc: '#85BB4F',
    },
    {
      dsc: '#C04F5D',
    },
    {
      dsc: '#D5DCE5',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0);
    const segurityBox = document.getElementById('segurityBox');
    const comBox = document.getElementById('comBox');
    const movementsBox = document.getElementById('movementsBox');
    const exchangeBox = document.getElementById('exchangeBox');

    segurityBox !== null && this.createObserver(segurityBox);
    comBox !== null && this.createObserver(comBox);
    movementsBox !== null && this.createObserver(movementsBox);
    exchangeBox !== null && this.createObserver(exchangeBox);

    setTimeout(() => {
      this.families.forEach((element, index) => {
        //console.log(element, index);
        fontLoader(element);
        const div = document.getElementById(`typographyName${index + 1}`);
        if (div !== null) {
          div.innerHTML = element.name;
          div.style.fontFamily = element.name;
        }
      });
    }, 100);
  }

  createObserver(element: HTMLElement): void {
    const options = {
      threshold: threshold,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    observer.observe(element);
  }

  // eslint-disable-next-line
  handleIntersection(entries: any): void {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= threshold;
    if (isVisible) {
      entry.target.classList.remove(
        entry.target.id === 'segurityBox' || entry.target.id === 'movementsBox'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add(
        entry.target.id === 'segurityBox' || entry.target.id === 'movementsBox'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    }
  }
}

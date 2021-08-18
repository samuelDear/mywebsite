import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';
import { fontLoader } from '../../../main';
import { Font, Project } from '../../services/common';
import { FeatureType } from 'src/app/services/common/features';

const threshold = 0.1;
@Component({
  selector: 'app-fjcintranet',
  templateUrl: './fjcintranet.component.html',
  styleUrls: ['./fjcintranet.component.scss'],
})
export class FjcintranetComponent implements OnInit {
  families: Font[] = [
    { name: 'Oswald', link: `https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap` },
    { name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap` },
  ];

  features: FeatureType[] = [
    {
      title: 'fjcintranet.feature1title',
      dsc: 'fjcintranet.feature1',
    },
    {
      title: 'fjcintranet.feature2title',
      dsc: 'fjcintranet.feature2',
    },
    {
      title: 'fjcintranet.feature3title',
      dsc: 'fjcintranet.feature3',
    },
    {
      title: 'fjcintranet.feature4title',
      dsc: 'fjcintranet.feature4',
    },
    {
      title: 'fjcintranet.feature5title',
      dsc: 'fjcintranet.feature5',
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
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade.resume',
    },
  ];

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    const logoJacintoConvit = document.getElementById('logoJacintoConvit');
    logoJacintoConvit !== null && this.createObserver(logoJacintoConvit);

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
      entry.target.classList.remove('showLogo');
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add('showLogo');
    }
  }

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }
}

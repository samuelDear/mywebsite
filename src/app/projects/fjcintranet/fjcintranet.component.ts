import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';

import { setProjectFont } from '../../../main';
import { Font, Project, FeatureType, ColorType } from '../../services/common';

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
      title: 'feature1title',
      dsc: 'feature1',
    },
    {
      title: 'feature2title',
      dsc: 'feature2',
    },
    {
      title: 'feature3title',
      dsc: 'feature3',
    },
    {
      title: 'feature4title',
      dsc: 'feature4',
    },
    {
      title: 'feature5title',
      dsc: 'feature5',
    },
  ];

  ramdons: Project[] = [
    {
      code: '/ormv',
      name: 'ORM',
      resume: 'orm-resume',
    },
    {
      code: '',
      name: 'My Portafolio',
      resume: 'myWeb-resume',
    },
    {
      code: '/afxtrade',
      name: 'AFX Trade',
      resume: 'afxtrade-resume',
    },
  ];

  colors: ColorType[] = [
    {
      dsc: '#3F5486',
    },
    {
      dsc: '#00AE89',
    },
    {
      dsc: '#BC0202',
    },
    {
      dsc: '#FFD439',
    },
  ];

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    const logoJacintoConvit = document.getElementById('logoJacintoConvit');
    logoJacintoConvit !== null && this.createObserver(logoJacintoConvit);
    setProjectFont(this.families);

    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
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
}

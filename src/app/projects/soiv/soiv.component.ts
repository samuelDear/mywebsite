import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColorType, FeatureType, Font, Project } from 'src/app/services/common';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';
import { setProjectFont } from 'src/main';

const threshold = 0.1;

@Component({
  selector: 'app-soiv',
  templateUrl: './soiv.component.html',
  styleUrls: ['./soiv.component.scss'],
})
export class SoivComponent implements OnInit {
  families: Font[] = [{ name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap` }];

  features: FeatureType[] = [
    {
      title: 'soiv.feature1title',
      dsc: 'soiv.feature1',
    },
    {
      title: 'soiv.feature2title',
      dsc: 'soiv.feature2',
    },
    {
      title: 'soiv.feature3title',
      dsc: 'soiv.feature3',
    },
    {
      title: 'soiv.feature4title',
      dsc: 'soiv.feature4',
    },
    {
      title: 'soiv.feature5title',
      dsc: 'soiv.feature5',
    },
  ];

  colors: ColorType[] = [
    {
      dsc: '#008080',
    },
    {
      dsc: '#40AD8E',
    },
    {
      dsc: '#1A202C',
    },
    {
      dsc: '#FD9C2B',
    },
  ];

  ramdons: Project[] = [
    {
      name: 'Quipus Events',
      resume: 'quipus-resume',
      code: '/quipus',
    },
    {
      code: '/tms',
      name: 'TMS',
      resume: 'tms-resume',
    },
    {
      code: '/traumappWeb',
      name: 'TraumApp Web',
      resume: 'traumappWeb-resume',
    },
  ];

  constructor(public translate: TranslateService, private i18Service: I18Service) {
    translate.use(i18Service.getLanguage());
  }

  ngOnInit(): void {
    window.scroll(0, 0);

    const logoJacintoConvit = document.getElementById('logoSoiv');
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

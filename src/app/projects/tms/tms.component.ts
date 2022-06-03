import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FeatureType, Project } from 'src/app/services/common';
import { I18Service } from 'src/app/services/i18n-service/i18n-service.service';
@Component({
  selector: 'app-tms',
  templateUrl: './tms.component.html',
  styleUrls: ['./tms.component.scss'],
})
export class TmsComponent implements OnInit {
  sliderPrincipalImg = 1;
  sliderSecundaryImg = 1;

  features: FeatureType[] = [
    {
      title: 'tms.featureTitle1',
      dsc: 'tms.feature1',
    },
    {
      title: 'tms.featureTitle2',
      dsc: 'tms.feature2',
    },
    {
      title: 'tms.featureTitle3',
      dsc: 'tms.feature3',
    },
    {
      title: 'tms.featureTitle4',
      dsc: 'tms.feature4',
    },
  ];

  ramdons: Project[] = [
    {
      name: 'Quipus Events',
      resume: 'quipus-resume',
      code: '/quipus',
    },
    {
      name: 'SOIV',
      resume: 'soiv-resume',
      code: '/soiv',
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
    this.i18Service.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });
  }

  scrollToPrincipalImg(direction: number): void {
    const sliderBox: HTMLElement = <HTMLElement>document.getElementById('principalImg');
    let position = 0;
    if (this.sliderPrincipalImg >= 3 && direction > 0) {
      this.sliderPrincipalImg = 1;
      position = 0;
    } else if (direction > 0) {
      if (this.sliderPrincipalImg < 3) {
        position = sliderBox.offsetWidth * this.sliderPrincipalImg;
      }
      this.sliderPrincipalImg += direction;
    } else {
      if (this.sliderPrincipalImg - 1 <= 0) {
        this.sliderPrincipalImg = 3;
        position = sliderBox.offsetWidth * 2;
      } else {
        this.sliderPrincipalImg += direction;
        position = sliderBox.offsetWidth * (this.sliderPrincipalImg - 1);
      }
    }
    sliderBox.scrollTo({
      left: position,
      behavior: 'smooth',
    });
  }

  scrollToSecundaryImg(direction: number): void {
    const sliderBox: HTMLElement = <HTMLElement>document.getElementById('secundaryImg');
    let position = 0;
    if (this.sliderSecundaryImg >= 3 && direction > 0) {
      this.sliderSecundaryImg = 1;
      position = 0;
    } else if (direction > 0) {
      if (this.sliderSecundaryImg < 3) {
        position = sliderBox.offsetWidth * this.sliderSecundaryImg;
      }
      this.sliderSecundaryImg += direction;
    } else {
      if (this.sliderSecundaryImg - 1 <= 0) {
        this.sliderSecundaryImg = 3;
        position = sliderBox.offsetWidth * 2;
      } else {
        this.sliderSecundaryImg += direction;
        position = sliderBox.offsetWidth * (this.sliderSecundaryImg - 1);
      }
    }
    sliderBox.scrollTo({
      left: position,
      behavior: 'smooth',
    });
  }
}

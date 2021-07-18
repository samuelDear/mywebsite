import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { navigationCustom } from '../../transition';

const threshold = 0.1;
@Component({
  selector: 'app-traumapp',
  templateUrl: './traumapp.component.html',
  styleUrls: ['./traumapp.component.scss'],
})
export class TraumappComponent implements OnInit {
  currentSliderPatient = 1;
  isDarkMode = false;

  // eslint-disable-next-line no-unused-vars
  constructor(public translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    const visualResult1 = document.getElementById('visualResult1');
    const visualResult2 = document.getElementById('visualResult2');
    const visualResult3 = document.getElementById('visualResult3');
    const visualResult4 = document.getElementById('visualResult4');

    visualResult1 !== null && this.createObserver(visualResult1);
    visualResult2 !== null && this.createObserver(visualResult2);
    visualResult3 !== null && this.createObserver(visualResult3);
    visualResult4 !== null && this.createObserver(visualResult4);

    const boxAnimation: string[] = [
      'resumeSection',
      'introSection',
      'visualResultSecion',
      'patientsSection',
      'formsSections',
      'calendarSection',
      'configSections',
      'principalFeatures',
    ];

    setTimeout(() => {
      boxAnimation.map((val: string) => {
        const boxAnimated: HTMLElement = <HTMLElement>document.getElementById(val);
        boxAnimated.classList.remove('entryPage');
      });
    }, 1000);
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
        entry.target.id === 'visualResult1' || entry.target.id === 'visualResult3'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    } else if (entry.target.offsetTop > window.scrollY) {
      entry.target.classList.add(
        entry.target.id === 'visualResult1' || entry.target.id === 'visualResult3'
          ? 'featureShowRight'
          : 'featureShowLeft',
      );
    }
  }

  navigateUrl(code: string): void {
    navigationCustom(() => this.router.navigate([code]));
  }

  scrollToRegisterPatient(direction: number): void {
    const sliderBox: HTMLElement = <HTMLElement>document.getElementById('registerPatientsSlider');
    let position = 0;
    if (this.currentSliderPatient >= 3 && direction > 0) {
      this.currentSliderPatient = 1;
      position = 0;
    } else if (direction > 0) {
      if (this.currentSliderPatient < 3) {
        position = sliderBox.offsetWidth * this.currentSliderPatient;
      }
      this.currentSliderPatient += direction;
    } else {
      if (this.currentSliderPatient - 1 <= 0) {
        this.currentSliderPatient = 3;
        position = sliderBox.offsetWidth * 2;
      } else {
        this.currentSliderPatient += direction;
        position = sliderBox.offsetWidth * (this.currentSliderPatient - 1);
      }
    }
    sliderBox.scrollTo({
      left: position,
      behavior: 'smooth',
    });
  }
  setDarksMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}

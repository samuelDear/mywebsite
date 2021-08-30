import { Component, OnInit, Input } from '@angular/core';
import { FeatureType } from 'src/app/services/common/features';

@Component({
  selector: 'app-features-box',
  templateUrl: './features-box.component.html',
})
export class FeaturesBoxComponent implements OnInit {
  @Input() features: FeatureType[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line
  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss'],
})
export class ImgLoaderComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() id = '';
  @Input() height = '10';
  @Input() classes: string | undefined;

  imgLoading = true;

  // eslint-disable-next-line
  constructor() {}
}

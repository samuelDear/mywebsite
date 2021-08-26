import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-screen',
  templateUrl: './image-screen.component.html',
})
export class ImageScreenComponent {
  @Input() urlimg = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() type = 'laptop';
  @Input() id = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

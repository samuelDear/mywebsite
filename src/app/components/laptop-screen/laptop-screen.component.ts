import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-laptop-screen',
  templateUrl: './laptop-screen.component.html',
})
export class LaptopScreenComponent {
  @Input() urlimg = '';
  @Input() alt = '';
  @Input() title = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

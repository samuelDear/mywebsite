import { Component, Input } from '@angular/core';
import { ColorType } from 'src/app/services/common/colors';

@Component({
  selector: 'app-color-palette',
  templateUrl: 'color-palette.component.html',
})
export class ColorPaletteComponent {
  @Input() colors: ColorType[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

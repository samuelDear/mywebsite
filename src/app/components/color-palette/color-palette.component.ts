import { Component, Input } from '@angular/core';
import { ColorType } from 'src/app/services/common/colors';

@Component({
  selector: 'app-color-palette',
  templateUrl: 'color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent {
  @Input() colors: ColorType[] = [];
}

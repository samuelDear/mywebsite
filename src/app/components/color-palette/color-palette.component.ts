import { Component, OnInit, Input } from '@angular/core';
import { ColorType } from 'src/app/services/common/colors';

@Component({
  selector: 'app-color-palette',
  templateUrl: 'color-palette.component.html',
})
export class ColorPaletteComponent implements OnInit {
  @Input() colors: ColorType[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line
  ngOnInit(): void {}
}

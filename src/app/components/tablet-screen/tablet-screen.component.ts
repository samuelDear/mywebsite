import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablet-screen',
  templateUrl: './tablet-screen.component.html',
})
export class TabletScreenComponent implements OnInit {
  @Input() urlimg = '';
  @Input() alt = '';
  @Input() title = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line
  ngOnInit(): void {}
}

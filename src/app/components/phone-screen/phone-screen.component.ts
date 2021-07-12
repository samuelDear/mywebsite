import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-screen',
  templateUrl: './phone-screen.component.html',
})
export class PhoneScreenComponent implements OnInit {
  @Input() urlimg = '';
  @Input() alt = '';
  @Input() title = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}

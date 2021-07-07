import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-screen',
  templateUrl: './phone-screen.component.html',
})
export class PhoneScreenComponent implements OnInit {
  @Input() urlimg = '';
  @Input() alt = '';
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}

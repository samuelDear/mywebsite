import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
  showButton: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  showButton: boolean = false;
  constructor() {
    window.scroll(0,0);
  }

  ngOnInit() {
  }

}

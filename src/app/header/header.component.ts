import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showAbout: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() { }

  navigation() {
    this.router.navigateByUrl('/menu');
  }
}

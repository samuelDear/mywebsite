import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-typographies',
  templateUrl: './typographies.component.html',
  styleUrls: ['./typographies.component.scss']
})
export class TypographiesComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

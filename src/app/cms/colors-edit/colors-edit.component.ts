import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colors-edit',
  templateUrl: './colors-edit.component.html',
  styleUrls: ['./colors-edit.component.scss']
})
export class ColorsEditComponent implements OnInit {

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

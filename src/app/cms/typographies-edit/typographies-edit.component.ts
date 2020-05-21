import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-typographies-edit',
  templateUrl: './typographies-edit.component.html',
  styleUrls: ['./typographies-edit.component.scss']
})
export class TypographiesEditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }


}

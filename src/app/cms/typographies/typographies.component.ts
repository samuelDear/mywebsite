import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TypographiesService } from '../../services/typographies.service';

@Component({
  selector: 'app-typographies',
  templateUrl: './typographies.component.html',
  styleUrls: ['./typographies.component.scss']
})
export class TypographiesComponent implements OnInit {
  typographies: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private typographiesService: TypographiesService,
  ) { }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }

    this.typographiesService.getTypographiesCms(user).subscribe((result:any) => {
      this.typographies = result.records;
      console.log(this.typographies);
    },
    (error) => {
      console.log(error);
    });
  }
}

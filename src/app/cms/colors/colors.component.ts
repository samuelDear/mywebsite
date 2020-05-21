import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  colors: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private colorsService: ColorsService
  ) { }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }
    this.colorsService.getColorsCms(user).subscribe((result:any) => {
      this.colors = result.records;
      console.log(this.colors);
    },
    (error) => {
      console.log(error);
    });
  }
}

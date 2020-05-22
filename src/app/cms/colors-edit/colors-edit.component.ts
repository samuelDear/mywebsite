import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-colors-edit',
  templateUrl: './colors-edit.component.html',
  styleUrls: ['./colors-edit.component.scss']
})
export class ColorsEditComponent implements OnInit {
  color:any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private colorsService: ColorsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      let params = {
        id: param.get('id'),
        sessionid: localStorage.sessionid,
      }

      console.log(params);
      if(parseInt(params.id) != 0){
        this.colorsService.getColorById(params).subscribe((res: any) => {
          this.color = res.entry;
          console.log(this.color);
        },
        (error) => {
          console.log(error);
        });
      }
    });
  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

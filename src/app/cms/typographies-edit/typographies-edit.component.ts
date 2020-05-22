import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TypographiesService } from '../../services/typographies.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-typographies-edit',
  templateUrl: './typographies-edit.component.html',
  styleUrls: ['./typographies-edit.component.scss']
})
export class TypographiesEditComponent implements OnInit {
  feature: any;
  projects: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private typographiesService: TypographiesService,
    private projectsServicio: ProjectsService,
  ) { }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }
    this.projectsServicio.getProjectsCms(user).subscribe((result:any) => {
      this.projects = result.records;
      console.log(result.color);
    },
    (error) => {
      console.log(error);
    });

    this.activatedRoute.paramMap.subscribe(param => {
      let params = {
        id: param.get('id'),
        sessionid: localStorage.sessionid,
      }

      console.log(params);
      if(parseInt(params.id) != 0){
        this.typographiesService.getTypographyById(params).subscribe((res: any) => {
          this.feature = res.entry;
          console.log(this.feature);
          //this.updateForm(this.feature);
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

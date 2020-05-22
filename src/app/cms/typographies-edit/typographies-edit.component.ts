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
  typography: any;
  projects: any;

  editForm= this.fb.group({
    id: [null, [Validators.required]],
    fontName: [null, [Validators.required]],
    fontUrl: [null, [Validators.required]],
    projectid: [null, [Validators.required]]
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private typographiesService: TypographiesService,
    private projectsServicio: ProjectsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }
    this.projectsServicio.getProjectsCms(user).subscribe((result:any) => {
      this.projects = result.records;
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
          this.typography = res.entry;
          console.log(this.typography);
          this.updateForm(this.typography);
        },
        (error) => {
          console.log(error);
        });
      }
    });
  }

  updateForm(typography: any){
    this.editForm.patchValue({
      id: typography.id,
      fontName: typography.fontname,
      fontUrl: typography.urlfont,
      projectid: typography.projectid
    });
  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeaturesService } from '../../services/features.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-features-edit',
  templateUrl: './features-edit.component.html',
  styleUrls: ['./features-edit.component.scss']
})
export class FeaturesEditComponent implements OnInit {
  projects: any;
  feature: any;

  editForm= this.fb.group({
    id: [null, [Validators.required]],
    titleEn: [null, [Validators.required]],
    titleEs: [null, [Validators.required]],
    dscEn: [null, [Validators.required]],
    dscEs: [null, [Validators.required]],
    projectid: [null, [Validators.required]]
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private featureService: FeaturesService,
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
        this.featureService.getFeatureById(params).subscribe((res: any) => {
          this.feature = res.entry;
          console.log(this.feature);
          this.updateForm(this.feature);
        },
        (error) => {
          console.log(error);
        });
      }
    });
  }
  updateForm(feature: any){
    this.editForm.patchValue({
      id: feature.id,
      titleEn: feature.titleen,
      titleEs: feature.titlees,
      dscEn: feature.dscen,
      dscEs: feature.dsces,
      projectid: feature.projectid
    });
  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

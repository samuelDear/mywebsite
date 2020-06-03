import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { StudiesService } from '../../services/studies.service';

@Component({
  selector: 'app-studies-edit',
  templateUrl: './studies-edit.component.html',
  styleUrls: ['./studies-edit.component.scss']
})
export class StudiesEditComponent implements OnInit {
  study: any;

  editForm= this.fb.group({
    id: [0, [Validators.required]],
    title: [null, [Validators.required]],
    datecreated: [null, [Validators.required]],
    institute: [null, [Validators.required]],
    urlinstitute: [null]
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private studiesService: StudiesService,
  ) { }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }

    this.activatedRoute.paramMap.subscribe(param => {
      let params = {
        id: param.get('id'),
        sessionid: localStorage.sessionid,
      }

      if(parseInt(params.id) != 0){
        this.studiesService.getStudyById(params).subscribe((res: any) => {
          this.study = res.entry;
          console.log(this.study);
          this.updateForm(this.study);
        },
        (error) => {
          console.log(error);
        });
      }
    });
  }

  updateForm(study: any){
    this.editForm.patchValue({
      id: study.id,
      title: study.title,
      datecreated: study.datecreated,
      institute: study.institute,
      urlinstitute: study.urlinstitute
    });
  }

  save(){
    if(this.editForm.valid){
        let params = {
          sessionid: localStorage.sessionid,
          id: this.editForm.get('id').value,
          title: this.editForm.get('title').value,
          datecreated: this.editForm.get('datecreated').value,
          institute: this.editForm.get('institute').value,
          urlinstitute: this.editForm.get('urlinstitute').value
        }
        console.log(params);

        this.studiesService.saveStudy(params).subscribe(res => {
          console.log(res);
          this.router.navigateByUrl("cms/studies");
        },
        (error) => {
          console.log(error);
        });
    }else{
      alert('Todos los campos son requeridos');
    }
  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

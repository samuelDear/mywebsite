import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-studies-edit',
  templateUrl: './studies-edit.component.html',
  styleUrls: ['./studies-edit.component.scss']
})
export class StudiesEditComponent implements OnInit {

  editForm= this.fb.group({
    id: [0, [Validators.required]],
    colorhex: [null, [Validators.required]],
    projectid: [null, [Validators.required]]
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
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
      }
    });
  }

  save(){
    console.log('holajeje');
  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

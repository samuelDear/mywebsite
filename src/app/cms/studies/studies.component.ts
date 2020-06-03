import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudiesService } from '../../services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  studies: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studiesService: StudiesService,
  ) { }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }

    this.studiesService.getCoursesCms(user).subscribe((result:any) => {
      this.studies = result.records;
      console.log(this.studies);
    },
    (error) => {
      console.log(error);
    });
  }

}

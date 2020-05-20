import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-homecms',
  templateUrl: './homecms.component.html',
  styleUrls: ['./homecms.component.scss']
})
export class HomecmsComponent implements OnInit {
  projects: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectsServicio: ProjectsService
  ) {
  }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }
    this.projectsServicio.getProjectsCms(user).subscribe((result:any) => {
      this.projects = result.records;
      console.log(result.records);
    },
    (error) => {
      console.log(error);
    });
  }

  logout(){

  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

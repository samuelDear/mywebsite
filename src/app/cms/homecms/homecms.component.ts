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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectsServicio: ProjectsService,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    let user = {
      sessionid: localStorage.sessionid,
    }
    /*this.projectsServicio.getProjectsCms(user).subscribe((result:any) => {
      this.projects = result.records;
      console.log(result.records);
    },
    (error) => {
      console.log(error);
    });*/
  }

  logout(){
    let user = {
      sessionid: localStorage.sessionid,
    }

    this.loginService.logout(user).subscribe((res:any) => {
      localStorage.clear();
      this.router.navigateByUrl("/cms");
    },
    (error) => {
      console.log(error);
    })

  }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }
}

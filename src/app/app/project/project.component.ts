import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { ProjectsService } from '../../services/projects.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectSelected: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private projectsServicio: ProjectsService,
    private router: Router
  ) {
    window.scroll(0,0);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      window.scroll(0,0);
      let links = document.getElementsByClassName('font-link');
      for(let i = links.length - 1; i >= 0; i--){
        links[i].remove();
      }

      let styles = document.getElementsByClassName('font-style');
      for(let i = styles.length - 1; i >= 0; i--){
        styles[i].remove();
      }

      let nameProject = {
        code: params.get('id'),
      }

      this.projectsServicio.getByCode(nameProject).subscribe(res => {
        this.projectSelected = res;
        this.projectSelected = this.projectSelected.entry;
        console.log(this.projectSelected);
        for(let i = 0; i < this.projectSelected.typographies.length; i++){

          this.setFont(this.projectSelected.typographies[i].url, this.projectSelected.typographies[i].name);

          var style = document.createElement('style');
          style.type = 'text/css';
          style.setAttribute('class',"font-style");
          style.innerHTML = `.${this.projectSelected.typographies[i].name}-s
          {
            font-family: '${this.projectSelected.typographies[i].name}';
            font-weight: 500;
          }`;
          document.getElementsByTagName('head')[0].appendChild(style);
          setTimeout(() => {
            document.getElementById(`font${i}`).classList.toggle(`${this.projectSelected.typographies[i].name}-s`);
          }, 100);
        }
      });
    });
  }

  setFont(url: string, name: string){
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', url);
    link.setAttribute('class',"font-link");
    document.head.appendChild(link);
  }

  setClass(){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.cssClass { color: #F00; }';
  }

  navigateUrl(code: string){
    console.log(code);
    this.router.navigate(['project',code]);
  }
}

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
    private projectsServicio: ProjectsService
  ) {
    window.scroll(0,0);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let nameProject = {
        code: params.get('id'),
      }

      this.projectsServicio.getByCode(nameProject).subscribe(res => {
        this.projectSelected = res;
        this.projectSelected = this.projectSelected.entry;
        console.log(this.projectSelected);
        for(let i = 0; i < this.projectSelected.typographies.length; i++){
          this.setFont(this.projectSelected.typographies[i].url);

          var style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML = `.${this.projectSelected.typographies[i].name}-s { font-family: '${this.projectSelected.typographies[i].name}'; }`;
          document.getElementsByTagName('head')[0].appendChild(style);
          setTimeout(() => {
            document.getElementById(`font${i}`).classList.toggle(`${this.projectSelected.typographies[i].name}-s`);
          }, 100);
        }
      });
    });
  }

  setFont(url: string){
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  setClass(){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.cssClass { color: #F00; }';



  }
}

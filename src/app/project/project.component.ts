import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { projects } from '../project_info/project_info.constant';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectSelected: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService
  ) {
    window.scroll(0,0);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let nameProject = params.get('id');

      for(let i = 0; i < projects.length; i++){
        if(nameProject == projects[i].id){
          this.projectSelected = projects[i];
        }
      }

      console.log(this.projectSelected);
      for(let i = 0; i < this.projectSelected.typography.length; i++){
        this.setFont(this.projectSelected.typography[i].urlFont);

        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `.${this.projectSelected.typography[i].fontName}-s { font-family: '${this.projectSelected.typography[i].fontName}'; }`;
        document.getElementsByTagName('head')[0].appendChild(style);
        setTimeout(() => {
          document.getElementById(`font${i}`).classList.toggle(`${this.projectSelected.typography[i].fontName}-s`);
        }, 100);
      }
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

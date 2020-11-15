import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fjcintranet',
  templateUrl: './fjcintranet.component.html',
  styles: [
  ]
})
export class FjcintranetComponent implements OnInit {
  families = [{name: 'Oswald', link: `https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap`},
  {name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap`}];


  constructor() { }

  ngOnInit(): void {
    this.families.forEach((element, index) => {
      console.log(element, index);
      this.fontLoader(element);

      if(document.getElementById(`typographyName${index+1}`) != undefined){
        document.getElementById(`typographyName${index+1}`).innerHTML = element.name;
        document.getElementById(`typographyName${index+1}`).style.fontFamily = element.name;
      };

      if(document.getElementById(`typographyExample${index+1}`) != undefined){
        document.getElementById(`typographyExample${index+1}`).style.fontFamily = element.name;
      };
    });
  }

  fontLoader = (param) => {
    var headID = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = "link" + param.name;

    headID.appendChild(link);

    link.href = param.link;
  }
}

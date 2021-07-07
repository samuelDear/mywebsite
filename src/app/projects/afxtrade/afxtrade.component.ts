import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { fontLoader } from '../../../main';

@Component({
  selector: 'app-afxtrade',
  templateUrl: './afxtrade.component.html',
  styleUrls: ['./afxtrade.component.scss']
})
export class AfxtradeComponent implements OnInit {
  families = [
    {name: 'Poppins', link: `https://fonts.googleapis.com/css2?family=Poppins&display=swap`},
    {name: 'Roboto', link: `https://fonts.googleapis.com/css2?family=Roboto&display=swap`}
  ];

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.families.forEach((element, index) => {
      //console.log(element, index);
      fontLoader(element);
      let div = document.getElementById(`typographyName${index+1}`);
      if(div != undefined){
        div.innerHTML = element.name;
        div.style.fontFamily = element.name;
      };

      if(div != undefined){
        div.style.fontFamily = element.name;
      };
    });
  }

}

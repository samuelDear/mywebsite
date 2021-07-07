import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { fontLoader } from '../../../main';

const threshold = 0.1;
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
        const segurityBox = document.getElementById('segurityBox');
        const comBox = document.getElementById('comBox');
        const movementsBox = document.getElementById('movementsBox');
        const exchangeBox = document.getElementById('exchangeBox');

        segurityBox !== null && this.createObserver(segurityBox);
        comBox !== null && this.createObserver(comBox);
        movementsBox !== null && this.createObserver(movementsBox);
        exchangeBox !== null && this.createObserver(exchangeBox);
        

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

    createObserver(element: HTMLElement): void {
        let options = {
            threshold: threshold,
          }
      
          const observer = new IntersectionObserver(this.handleIntersection, options);
      
          observer.observe(element);
    }

    handleIntersection(entries: any): void{
        const entry = entries[0];
        console.log(entries);
        const isVisible = entry.intersectionRatio >= threshold;
        if (isVisible) {
            entry.target.classList.remove(
                entry.target.id === 'segurityBox' || entry.target.id === 'movementsBox'
                ? 'featureShowRight'
                : 'featureShowLeft'
            );
        } else if(entry.target.offsetTop > window.scrollY){
            entry.target.classList.add(
                entry.target.id === 'segurityBox' || entry.target.id === 'movementsBox'
                ? 'featureShowRight'
                : 'featureShowLeft'
            );
        }
    }
}

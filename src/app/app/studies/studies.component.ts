import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  showButton: boolean = true;
  curses: any = [];
  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 10; i++){
      this.curses.push({
        title: 'Curso' + i,
        datecreated: new Date(),
        school: 'Instituto' + i + 1,
      });
    }
    console.log(this.curses);
  }

}

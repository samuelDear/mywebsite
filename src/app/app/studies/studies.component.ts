import { Component, OnInit } from '@angular/core';
import { StudiesService } from '../../services/studies.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  showButton: boolean = true;
  courses: any = [];
  studies: any;
  constructor(
    private studiesService: StudiesService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.studiesService.getCourses().subscribe((result:any) => {
      this.studies = result.records;
      console.log(this.studies);
    },
    (error) => {
      console.log(error);
    });

    for(let i = 0; i < 10; i++){
      this.courses.push({
        title: 'Curso' + i,
        datecreated: new Date(),
        school: 'Instituto' + i + 1,
      });
    }
  }

  getMonth(month: string){
    var stringMonth = "";
    switch (month) {
      case '01':
        stringMonth = this.translate.currentLang == "es" ? 'Enero' : 'January';
        break;
      case '02':
        stringMonth = this.translate.currentLang == "es" ? 'Febrero' : 'February';
        break;
      case '03':
        stringMonth = this.translate.currentLang == "es" ? 'Marzo' : 'March';
        break;
      case '04':
        stringMonth = this.translate.currentLang == "es" ? 'Abril' : 'April';
        break;
      case '05':
        stringMonth = this.translate.currentLang == "es" ? 'Mayo' : 'May';
        break;
      case '06':
        stringMonth = this.translate.currentLang == "es" ? 'Junio' : 'June';
        break;
      case '07':
        stringMonth = this.translate.currentLang == "es" ? 'Julio' : 'July';
        break;
      case '08':
        stringMonth = this.translate.currentLang == "es" ? 'Agosto' : 'August';
        break;
      case '09':
        stringMonth = this.translate.currentLang == "es" ? 'Septiembre' : 'September';
        break;
      case '10':
        stringMonth = this.translate.currentLang == "es" ? 'Octubre' : 'October';
        break;
      case '11':
        stringMonth = this.translate.currentLang == "es" ? 'Noviembre' : 'November';
        break;
      case '12':
        stringMonth = this.translate.currentLang == "es" ? 'Diciembre' : 'December';
        break;
    }

    return stringMonth;
  }
}

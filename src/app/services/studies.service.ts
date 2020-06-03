import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  url='http://localhost/mywebsite/src/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get(`${this.url}studies/entry.php`);
  }

  getCoursesCms(user) {
    return this.http.get(`${this.url}studies/entrycms.php?sessionid=${user.sessionid}`);
  }

  getStudyById(params) {
    return this.http.get(`${this.url}studies/specificentrycms.php?sessionid=${params.sessionid}&id=${params.id}`);
  }

  saveStudy(params) {
    var parsedPars = Object.keys(params).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    }).join('&');

    return this.http
    .get(`${this.url}studies/savestudy.php?${parsedPars}`);
  }

  deleteStudy(params){
    return this.http.get(`${this.url}studies/deletestudy.php?sessionid=${params.sessionid}&id=${params.id}`);
  }
}

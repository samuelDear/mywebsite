import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  url='http://localhost/mywebsite/src/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  getCoursesCms(user) {
    return this.http.get(`${this.url}studies/entrycms.php?sessionid=${user.sessionid}`);
  }
}

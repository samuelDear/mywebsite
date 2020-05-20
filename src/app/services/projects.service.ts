import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url='http://localhost/mywebsite/src/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(`${this.url}projects/entry.php`);
  }

  getByCode(code) {
    return this.http.get(`${this.url}projects/specificentry.php?code=${code.code}`);
  }
}

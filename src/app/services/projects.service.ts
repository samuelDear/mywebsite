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

  getById(project) {
    return this.http.get(`${this.url}projects/specificentrycms.php?id=${project.id}`);
  }

  getProjectsCms(user) {
    return this.http.get(`${this.url}projects/entrycms.php?sessionid=${user.sessionid}`);
  }

  getProjectQty(user){
    return this.http.get(`${this.url}projects/menuprojects.php?sessionid=${user.sessionid}`);
  }

  getColorsQty(user){
    return this.http.get(`${this.url}projects/menucolors.php?sessionid=${user.sessionid}`);
  }

  getTypographyQty(user){
    return this.http.get(`${this.url}projects/menutypography.php?sessionid=${user.sessionid}`);
  }

  getFeaturesQty(user){
    return this.http.get(`${this.url}projects/menufeatures.php?sessionid=${user.sessionid}`);
  }

  saveProject(params){
    var formdata = new FormData();
    for(var key in params){
      formdata.append(key, params[key]);
      console.log(formdata.get(key));
    }

    let uploadURL = `${this.url}projects/saveproject.php?`;
    return this.http.post<any>(uploadURL, formdata);
  }

  deleteProject(params){
    return this.http.get(`${this.url}projects/deleteproject.php?sessionid=${params.sessionid}&id=${params.id}`);
  }
}

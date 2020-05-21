import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  url='http://localhost/mywebsite/src/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  getFeaturesCms(user){
    return this.http.get(`${this.url}features/entrycms.php?sessionid=${user.sessionid}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  url='http://localhost/mywebsite/src/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  getColorsCms(user) {
    return this.http.get(`${this.url}colorss/entrycms.php?sessionid=${user.sessionid}`);
  }
}

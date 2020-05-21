import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypographiesService {

  url='http://localhost/mywebsite/src/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  getTypographiesCms(user: any) {
    return this.http.get(`${this.url}typographies/entrycms.php?sessionid=${user.sessionid}`);
  }
}

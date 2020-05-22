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

  getTypographyById(params) {
    return this.http.get(`${this.url}typographies/specificentrycms.php?sessionid=${params.sessionid}&id=${params.id}`);
  }

  saveTypography(params) {
    var parsedPars = Object.keys(params).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    }).join('&');

    return this.http
    .get(`${this.url}typographies/savetypography.php?${parsedPars}`);
  }

  deleteTypography(params){
    return this.http.get(`${this.url}typographies/deletetypography.php?sessionid=${params.sessionid}&id=${params.id}`);
  }
}

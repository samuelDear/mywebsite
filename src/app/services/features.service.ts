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

  getFeatureById(params) {
    return this.http.get(`${this.url}features/specificentrycms.php?sessionid=${params.sessionid}&id=${params.id}`);
  }

  saveFeature(params) {
    var parsedPars = Object.keys(params).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    }).join('&');

    return this.http
    .get(`${this.url}features/savefeature.php?${parsedPars}`);
  }

  deleteFeature(params){
    return this.http.get(`${this.url}features/deletefeature.php?sessionid=${params.sessionid}&id=${params.id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost/mywebsite/src/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.get(`${this.url}login/login.php?email=${encodeURIComponent(user.email)}&pwd=${encodeURIComponent(user.pwd)}`);
  }

  logout(user){
    return this.http.get(`${this.url}login/logout.php?sessionid=${encodeURIComponent(user.sessionid)}`);
  }

}

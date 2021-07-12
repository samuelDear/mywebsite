import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emailForm, responseEmail } from '../common/email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // eslint-disable-next-line no-unused-vars
  constructor(private http: HttpClient) {}

  // Servicio para enviar email a correo
  public sendContact(params: emailForm): Observable<any> {
    return this.http.get<responseEmail>(
      `${environment.url}/contact/contact.php?name=${params.name}&email=${params.email}&dsc=${params.dsc}`,
    );
  }
}

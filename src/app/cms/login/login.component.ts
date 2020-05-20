import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm= this.fb.group({
    email: ['',[Validators.required]],
    pwd: ['',[Validators.required]]
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private fb: FormBuilder,
  ) {
    this.error = "";
  }

  ngOnInit() {
    /*let user = {
      email: 'samuel_dear@hotmail.com',
      pwd: '1234',
    }
    this.loginService.login(user).subscribe(res => {
      console.log(res);
    })*/
  }

  navigate(){
    this.router.navigate(['home'], {relativeTo: this.route});
  }

  login(){
    this.error = "";
    if(this.loginForm.valid){
      let user ={
        pwd: this.loginForm.get('pwd').value,
        email: this.loginForm.get('email').value,
      }

      this.loginService.login(user).subscribe(res => {
        console.log(res);
        localStorage.setItem('sessionid',res.sessionid);
        this.router.navigate(['home'], {relativeTo: this.route}); 
      },
      (error) => {
        if(error.status == 400){
          this.error = "Parametros obligatorios email, pwd";
        }else if(error.status == 500){
          this.error = "Error interno";
        }else if(error.status == 401){
          this.error = "Usuario/Clave Inválidos";
        }else if(error.status == 402){
          this.error = "Usuario bloqueado";
        }else{
          this.error = "Error";
        }
        console.log(error.status);
      })
    }else{
      this.error = "Campos requeridos";
    }
  }
}

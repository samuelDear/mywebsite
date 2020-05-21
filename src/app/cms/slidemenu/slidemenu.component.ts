import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.scss']
})
export class SlidemenuComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() { }

  navigate(url){
    this.router.navigateByUrl("cms/" + url);
  }

  logout(){
    let user = {
      sessionid: localStorage.sessionid,
    }

    this.loginService.logout(user).subscribe((res:any) => {
      localStorage.clear();
      this.router.navigateByUrl("/cms");
    },
    (error) => {
      console.log(error);
    })
  }
}

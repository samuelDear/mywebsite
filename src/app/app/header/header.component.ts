import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showAbout: boolean;
  @Input() headerNav: boolean;
  showHeader: boolean;
  constructor(private router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        let regex = /project-edit/;
        if(this.router.url == '/cms' || this.router.url == '/cms/home' ||
         this.router.url == '/cms/projects' || regex.test(this.router.url)){
          this.showHeader = false;
        }else{
          this.showHeader  = true;
        }
        console.log(this.headerNav);
        if(this.headerNav){
          this.animation();
        }
      }
    });
  }

  ngOnInit() { }

  navigation() {
    if(this.router.url != '/menu'){
      this.animation();
      this.router.navigateByUrl('/menu');
    }
  }

  animation(){
    var button = document.getElementsByClassName('hamburguer')[0];
    if(button != undefined){
      button.classList.toggle('bt-menu-open');
    }
  }
}

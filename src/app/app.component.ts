import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'europop';
  laoding = false
  constructor(private router: Router){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationStart){
        this.laoding = true
      }
      if(event instanceof NavigationEnd){
        this.laoding = false
      }
      if(event instanceof NavigationCancel){
        this.laoding = false
      }
      if(event instanceof NavigationError){
        this.laoding = false
      }
    })
  }
}

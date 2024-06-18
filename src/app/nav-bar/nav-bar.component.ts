import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showPlus: boolean = false;
  showSideMenu: boolean = false;
  isMenuOpen = false;
  showLogin: boolean = false
  showUser:boolean = false
  showSearch:boolean =false

  constructor(public _auth: AuthService) {}

  
  togglePlus() {
    this.showPlus = !this.showPlus;
  }

  toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  enter(){
    this.showLogin =!this.showLogin;
  }
  enter2(){
    this.showUser =!this.showUser;
  }
  getSearch(){
    this.showSearch = !this.showSearch
  }
}
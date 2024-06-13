import { Component } from '@angular/core';

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

  constructor() {}
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
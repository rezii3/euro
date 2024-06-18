import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileData:any;
constructor(public _auth:AuthService){
  this._auth.getProfile().subscribe((data)=>{
    this.profileData = data
    console.log(data)
  })
  
}
logOut(){
  localStorage.clear()
}


}

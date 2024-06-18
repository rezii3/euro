import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBuilder } from '../../api.builder';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  shesulia(){
   let token = localStorage.getItem('token')
    if(token){
      return true
    }
    else{
      return false
    }
  }
  login(email:string, password:string){
    return this._http.post<any>(ApiBuilder.getEndPoint('auth/login'),{
      email:email,
      password:password
    })
  }
  getProfile(){
    let token  = localStorage.getItem("token")
    let headers = new HttpHeaders({
      Authorization:`Bearer ${token}`

    });
    return this._http.get<any>(ApiBuilder.getEndPoint('auth/profile'),{
      headers:headers,
    })
  }
}

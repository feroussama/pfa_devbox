import { Injectable } from '@angular/core';
import {enableProdMode} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {  HttpHeaders,HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { tokenNotExpired } from 'angular-jwt';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'C:/Users/hend/login/models/user';
import { Response, RequestOptions } from '@angular/http';   
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do'; 

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    let headers = new Headers();
    let myheader = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/registre', user,{headers: myheader})
      ;
  }
  envoi(user){
    //let headers = new Headers();
    let myheader = new HttpHeaders();
    myheader.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/forgot_password', user,{headers: myheader});
  }
  getProfile() {
    let headers = new Headers();
    let myheader = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: myheader});
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  
  authenticateUser(user){
    
    let headers = new Headers();
    let myheader = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/login', user,{headers: myheader})
    ;
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
 
}

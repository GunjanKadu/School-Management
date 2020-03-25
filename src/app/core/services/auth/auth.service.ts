import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import config from '../../../config/config';

const API_ENDPOINT = config.API_ENDPOINT;
//const API_ENDPOINT = 'http://localhost:3000';
//const API_ENDPOINT = 'http://192.168.1.13:3000';

@Injectable()
export class AuthService {

  private token: any;
  result: any;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: Http,
    private router: Router
  ) {}
  

  get isLoggedIn() {

    if(this.getToken().length > 0 ) {
      this.loggedIn.next(true);
    }

    return this.loggedIn.asObservable();
  }

  login = (credential: any) => {
    return this.http.post(`${API_ENDPOINT}/api/auth/login`, credential)
      .map(res => this.result = res.json());        
  }

  saveToken (token: string) {
    localStorage.setItem('userToken', token);
  }

  getToken () {
    return localStorage.getItem('userToken') || '';
  }

  saveUser(name: string, id: string, role: string) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userId', id);
    localStorage.setItem('role', role);
  }


  private handleError (error: Response | any) {
    console.error('[AuthService] :: handleError', error);
    return Observable.throw(error);
  }

  loginDone() {
  	this.loggedIn.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('userToken');
    localStorage.removeItem('selected_stu_id');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    this.router.navigate(['/auth']);
  }
  
}//AuthService
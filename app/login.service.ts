import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userinfo } from './model/user';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = 'http://saapi.azaz.com/api';

  constructor(private http: HttpClient) { }

  login(model: userinfo) {
    const headersValue = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(this.baseURL + '/login', model, headersValue);
  }
  getUserbyId(obj: any) {
    return this.http.post(
      this.baseURL + '/UserDetails/GetUserbyId',
      JSON.stringify(obj),
      headersData
    );
  }
  SaveUser(obj:any){
    return this.http.post(this.baseURL+'/UserDetails/SaveUser',JSON.stringify(obj),headersData);
  }
  viewusers(obj:any){
    return this.http.post(this.baseURL+'/UserDetails/GetUserbyId',JSON.stringify(obj),headersData);
  }
  saverole(obj:any){
    return this.http.post(this.baseURL+'/Roles/SaveRoles',JSON.stringify(obj),headersData);
  }
  viewroles(obj:any){
    return this.http.post(this.baseURL+'/Roles/GetRoles',JSON.stringify(obj),headersData);
  }
  editprofile(obj:any){
    return this.http.post(this.baseURL+'/UserDetails/SaveUser',JSON.stringify(obj),headersData);
  }
  deleteuser(obj: any){
    return this.http.post(this.baseURL+'/UserDetails/SaveUser',JSON.stringify(obj),headersData);
  }

}

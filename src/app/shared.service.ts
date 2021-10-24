import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = "http://localhost:8330/api";

  constructor(private http: HttpClient) { }

  getAppList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Application');
  }

  addApplication(val: any) {
    return this.http.post(this.APIUrl + '/Application', val);
  }

  deleteApplication(val:any) {
    return this.http.delete(this.APIUrl + '/Application/' + val);
  }


  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/User');
  }

  addUser(val: any) {
    return this.http.post(this.APIUrl + '/User', val);
  }

  deleteUser(val: any) {
    return this.http.delete(this.APIUrl + '/User/' + val);
  }


  getUserApp(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/UserApp')
  }

  deleteUserApp(val: any) {
    return this.http.delete(this.APIUrl + '/UserApp/' + val)
  }

  addAppForUser(val: any) {
    return this.http.put(this.APIUrl + '/UserApp', val)
  }
}

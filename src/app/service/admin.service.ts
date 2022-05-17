import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  signInApi = "http://localhost:3000/admin/signin";

  userlist = "http://localhost:3000/admin/user-list";

  publishedRide = "http://localhost:3000/admin/published-rides";

  bookedRide = "http://localhost:3000/admin/booked-rides";

  constructor(private http:HttpClient) { }

  signIn(email:string,password:string):Observable<any>{
     return this.http.post(this.signInApi,{email:email,password:password});
  }

  getUserList():Observable<any>{
    return this.http.get(this.userlist);
  }

  getPublishedRides():Observable<any>{
     return this.http.get(this.publishedRide);
  }

  getBookedRides():Observable<any>{
      return this.http.get(this.bookedRide);
  }
}

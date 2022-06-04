import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  signInApi = "https://ridesharely-backend-api.herokuapp.com/admin/signin";

  userlist = "https://ridesharely-backend-api.herokuapp.com/admin/user-list";

  publishedRide = "https://ridesharely-backend-api.herokuapp.com/admin/published-rides";

  // bookedRide = "http://localhost:3000/admin/booked-rides";
  bookedRide = "https://ridesharely-backend-api.herokuapp.com/admin/booked-rides";
  verifyUser = "http://localhost:3000/admin/refereceVerification";
  blockUser= "http://localhost:3000/admin/block";
  unblockUser= "http://localhost:3000/admin/unblock";
  

  constructor(private http:HttpClient) { }

  signIn(email:string,password:string):Observable<any>{
     return this.http.post(this.signInApi,{email:email,password:password});
  }
  verify(id:any):Observable<any>{
   return this.http.post(this.verifyUser,{userId:id}) ;
  }
  Block(id:any):Observable<any>{
    return this.http.post(this.blockUser,{userId:id}) ;
   }
   unBlock(id:any):Observable<any>{
    return this.http.post(this.unblockUser,{userId:id}) ;
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


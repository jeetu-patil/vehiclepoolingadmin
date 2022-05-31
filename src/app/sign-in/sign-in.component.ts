import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email:string = "";
  password:string = "";
  constructor(private adminService:AdminService , private router:Router , private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  signinUser(){
    console.log(this.email+"  ----   "+this.password);
      this.adminService.signIn(this.email,this.password).subscribe(data=>{
          this.toastr.success("Login Success","Success");
           sessionStorage.setItem("jwt-token",data.token);
           console.log(sessionStorage.getItem("jwt-token"));
          // sessionStorage.setItem("userId",data.result._id);
          this.router.navigate(["dashboard"]);
      },err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 400){
            this.toastr.error("Invalid User","Unauthorized request");
          }
          else if(err.status == 500){
            this.toastr.error("Internal Server Error","Error");
          }
        }
      });
    }


}

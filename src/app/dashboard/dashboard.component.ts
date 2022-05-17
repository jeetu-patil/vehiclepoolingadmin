import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router , private activatedRoute:ActivatedRoute) { }

 ngOnInit(): void {
 }

 getUserList(){
     this.router.navigate(['userlist'],{relativeTo:this.activatedRoute})
 }
 dashBoard(){
  this.router.navigate(['dashboard'],{relativeTo:this.activatedRoute})
 }
 publishRides(){
  this.router.navigate(['publish-rides'],{relativeTo:this.activatedRoute})
 }
 bookRides(){
  this.router.navigate(['book-rides'],{relativeTo:this.activatedRoute})
 }

}

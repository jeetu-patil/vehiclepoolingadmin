import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  total_user:any;
  userlist:any;
  total_booker:any;
  total_publisher:any;
  constructor(private adminService : AdminService) {
     this.adminService.getUserList().subscribe(result=>{
       this.userlist=result;
       this.total_user=this.userlist.length
     })
    this.adminService.getBookedRides().subscribe(result=>{
      this.total_booker=result.length;
    })
    this.adminService.getPublishedRides().subscribe(result=>{
      this.total_publisher=result.length;
    })
   }
  ngOnInit(): void {
  }

}

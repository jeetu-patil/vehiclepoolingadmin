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
  constructor(private adminService : AdminService) {
    
   }
  ngOnInit(): void {
  }

}

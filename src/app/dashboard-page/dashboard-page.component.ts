import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  total_user: any;
  userlist: any;
  total_booker: any;
  chartData:any
  total_publisher: any;
  cancelled:any=0;
  pcancell:any=0;
  timeEx:any=0;

  constructor(private adminService: AdminService) {
    this.adminService.getUserList().subscribe(result => {
      this.userlist = result;
      this.total_user = this.userlist.length
      sessionStorage.setItem('total_user',this.userlist.length)
    })

    this.adminService.getBookedRides().subscribe(result => {
      this.total_booker = result.length;
         for(let can of result)
         {
           if(can.isCancelled==true)
            this.cancelled++;
         }
      // this.cancelled=
      sessionStorage.setItem('total_boker',this.total_booker)
      sessionStorage.setItem('TotalCancel',this.cancelled)
    })
    this.adminService.getPublishedRides().subscribe(result => {
      this.total_publisher = result.length;
      sessionStorage.setItem('total_publisher',this.total_publisher)
       for(let puca of result){
          if(puca.isTimeExpired==true)
          this.timeEx++;
         console.log(puca.isTimeExpired);
          if(puca.isCancelled==true)
           this.pcancell++;
              }
              sessionStorage.setItem('publisherCancel',this.pcancell)
              sessionStorage.setItem('timeEx',this.timeEx);
    })
    
    this.chartData = [
      
      
      {      
        data: [sessionStorage.getItem('total_boker')],
        label: 'Bookers'
      },
      
      {
        data: [sessionStorage.getItem('total_publisher')],
        label: 'Publishers'
      },
      {
        data:[sessionStorage.getItem('publisherCancel')],
        label:'Cancel By Publisher'
       },
      {
        data: [sessionStorage.getItem('timeEx')],
        // data:this.timeEx,
        label: 'TimeExpired'
      },
      {
        data: [sessionStorage.getItem('total_user')],
        label: 'Users'
      },
      {
        data: [sessionStorage.getItem('TotalCancel')],
        label: 'cancelled by booker'
      }
      // {
      //   data: [0], 
      //   // [sessionStorage.getItem('total_publisher')],
      //   label: 'start'
      // },
    ];
    
  
  }
  ngOnInit(): void {
  }
}


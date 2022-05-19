import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userlist:any;
  constructor(private userListService : AdminService) {
    
    this.userListService.getUserList().subscribe(data=>{
      console.log(data);
      this.userlist = data;
    });
   }

  ngOnInit(): void {

  }

}

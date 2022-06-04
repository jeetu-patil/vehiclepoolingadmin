import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userlist:any;
  // BL:boolean=true;
  constructor(private userListService : AdminService) {
    
    this.userListService.getUserList().subscribe(data=>{
      console.log(data);
      this.userlist = data;
    });
   }
   Reference(userId:any):any{
    alert(userId);
    this.userListService.verify(userId).subscribe(result=>{
        console.log(result);
    })
   }
   BlockByAdmin(userId:any):any{
    this.userListService.Block(userId).subscribe(result=>{
      alert("User Block Succesfully");
    })
   }
   unBlockByAdmin(userId:any):any{
    this.userListService.unBlock(userId).subscribe(result=>{
      alert("User Block Succesfully");
    })
   }
  ngOnInit(): void {

  }

}

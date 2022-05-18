import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService} from '../service/admin.service';

@Component({
  selector: 'app-publisherdetail',
  templateUrl: './publisherdetail.component.html',
  styleUrls: ['./publisherdetail.component.css']
})
export class PublisherdetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: AdminService,private router:Router) { }
  userId:any;
  user:any;
  comments:any;
  p:any;
  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.paramMap.get("id");
    this.userService.getPublishedRides().subscribe(data => {
      this.user=data;
      for(let user of this.user){
        if(this.userId==user._id){
          this.user=user;
          break;
        }
      }
      console.log("In detail Componect")
      console.log(this.user);
      console.log(this.userId)
      
    },err => {

    });
  }
 }

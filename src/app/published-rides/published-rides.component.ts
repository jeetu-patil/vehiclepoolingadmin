import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-published-rides',
  templateUrl: './published-rides.component.html',
  styleUrls: ['./published-rides.component.css']
})
export class PublishedRidesComponent implements OnInit {
publishRideList:any;
  constructor(private publishRides : AdminService,private router:Router) { }

  ngOnInit(): void {
    this.publishedRides();
  }
  publisherProfile(id:any){
    console.log("Id"+id);
    this.router.navigate(['publisherProfile',id]);
  }
publishedRides(){
this.publishRides.getPublishedRides().subscribe(data=>{
  this.publishRideList = data;
  console.log(data);
});
}

}

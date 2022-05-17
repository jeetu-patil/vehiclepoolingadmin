import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-published-rides',
  templateUrl: './published-rides.component.html',
  styleUrls: ['./published-rides.component.css']
})
export class PublishedRidesComponent implements OnInit {
publishRideList:any;
  constructor(private publishRides : AdminService) { }

  ngOnInit(): void {
    this.publishedRides();
  }

publishedRides(){
this.publishRides.getPublishedRides().subscribe(data=>{
  this.publishRideList = data;
});
}

}

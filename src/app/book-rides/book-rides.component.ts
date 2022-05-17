import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-book-rides',
  templateUrl: './book-rides.component.html',
  styleUrls: ['./book-rides.component.css']
})
export class BookRidesComponent implements OnInit {
  bookRideList:any;
  constructor(private bookRide: AdminService) { }

  ngOnInit(): void {
    this.getBookedRides();
  }

   getBookedRides(){
     this.bookRide.getBookedRides().subscribe(data=>{
         this.bookRideList = data;
         console.log(data);
         console.log(data[0]._id);
     });
   }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService,private router: Router) { }

  user:any;
  FileImage:any;
  imageUrl:any;

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.user = data;
      console.log(this.user);
    });
  }
 
  
  doneMethod(id:any){
    let formData =new FormData();
    formData.append("image",this.user.image);
    formData.append("name",this.user.name);
    formData.append("number",this.user.miniBio);
    formData.append("userId",id);
    this.userService.editNMI(formData).subscribe(result=>{
      if(result){
      console.log(result);
         alert("Your Profile is Edit Succefully")
      }
         else
          alert("Failed To Edit profile");
    }
      )
  }
  selectImage(event:any){
    const file = event.target.files[0];
    console.log(file)
    this.user.image = file;
    var reader = new FileReader();
    
         this.FileImage = event.target.files[0];
         var reader = new FileReader();
         reader.onload = (event:any) => {
           this.imageUrl = event.target.result;   
        }
         reader.readAsDataURL(this.FileImage);
      
    
  }
  mobileEdit(id:any){
    this.router.navigate(['verification-otp',id]);
  }
  emailEdit(id:any){

  }
  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

}

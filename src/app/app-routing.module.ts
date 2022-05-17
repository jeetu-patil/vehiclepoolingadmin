import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRidesComponent } from './book-rides/book-rides.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublishedRidesComponent } from './published-rides/published-rides.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
{
   path:"",
   component:SignInComponent
},
  {
    path:"dashboard",
    component:DashboardComponent,
    children:[
      {
        path:"",
        component:DashboardPageComponent
      },
      {
        path:"userlist",
        component:UserlistComponent
      },
      {
        path:'publish-rides',
        component:PublishedRidesComponent
      },
      {
        path:'book-rides',
        component:BookRidesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

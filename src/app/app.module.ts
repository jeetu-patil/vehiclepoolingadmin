import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './userlist/userlist.component';
import { PublishedRidesComponent } from './published-rides/published-rides.component';
import { FormsModule } from '@angular/forms';
import { BookRidesComponent } from './book-rides/book-rides.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ToastrModule } from 'ngx-toastr';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CashingmemoryService } from './service/cashingmemory.service';
import { AdminService } from './service/admin.service';
// import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts' ;
import { InterceptorService } from './service/interceptor.service';

// import { PublisherdetailComponent } from './publisherdetail/publisherdetail.component';
// import {}

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    PublishedRidesComponent,
    BookRidesComponent,
    DashboardComponent,
    DashboardPageComponent,
    NavbarComponent,
    SignInComponent,
    SideBarComponent,
    // PublisherdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // Chart,
    ChartsModule
    
  ],
  providers: [{
    useClass: CashingmemoryService,
    provide: HTTP_INTERCEPTORS,
    multi: true },
    AdminService,
  {
    useClass:InterceptorService,
    provide:HTTP_INTERCEPTORS,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

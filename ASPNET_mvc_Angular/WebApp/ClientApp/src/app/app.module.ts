import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddLeaseComponent } from './add-lease/add-lease.component';
import { LeaseDetailsComponent } from './lease-details/lease-details.component';


const appRoutes: Routes = [
  {
    path: 'details/:id',
    component: LeaseDetailsComponent,
    data: { title: 'Lease Details' }
  },
  {
    path: '',
      component: LeaseDetailsComponent,
      data: { title: 'Lease List' }
  },
  {
    path: 'details',
      component: LeaseDetailsComponent,
      data: { title: 'Lease List' }
  },
  {
    path: 'create',
      component: AddLeaseComponent,
      data: { title: 'Add Lease' }
    }

];

@NgModule({
  declarations: [
    AppComponent,
    AddLeaseComponent,
    LeaseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

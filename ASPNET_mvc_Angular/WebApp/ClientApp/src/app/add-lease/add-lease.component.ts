import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-add-lease',
  templateUrl: './add-lease.component.html',
  styleUrls: ['./add-lease.component.css']
})
export class AddLeaseComponent implements OnInit {

    lease: any = {};
    customerList: any;
    vehicleData: any = {};

    constructor(private http: HttpClient, private router: Router) { }
    ngOnInit() {
        this.http.get('/api/Customer').subscribe(data => {
            this.customerList = data;
        });

       
    
    }

    calculateRental() {

        this.lease.monthlyRental = (this.lease.leaseAmount + ((this.lease.leaseAmount * this.lease.intersetRate) / 100)) / this.lease.nbrOfMonths;
        this.lease.monthlyRental = parseInt(this.lease.monthlyRental);
    }



    createLease() {
     
        this.http.post('/api/Lease', this.lease)
            .subscribe(res => {
                let id = res['Id'];
                this.router.navigate(['/details', id]);
            }, (err) => {
                console.log(err);
            }
            );
    }

    changeOnUserId(cusId) {

        console.log(cusId);

        this.http.get('/api/Vehicle/', { params:{ cusId: cusId } }).subscribe(data => {
            console.log("vehicle data :",data);
            this.vehicleData = data;
            this.lease.vehChasiNbr = this.vehicleData.vehChasiNbr;
            this.lease.startDate = this.vehicleData.startDate;

        }, (err) => {
            console.log(err);
        });
         
   }

}

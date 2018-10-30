import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lease-details',
  templateUrl: './lease-details.component.html',
  styleUrls: ['./lease-details.component.css']
})
export class LeaseDetailsComponent implements OnInit {
    leaseList: any;
    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
        this.http.get('/api/Lease').subscribe(data => {
            this.leaseList = data;
        });
    }

    deleteLease(id) {
        this.http.delete('/api/Lease/' + id)
            .subscribe(res => {
                this.ngOnInit();
                this.router.navigate(['/Lease']);
            }, (err) => {
                console.log(err);
            }
            );
    }
}

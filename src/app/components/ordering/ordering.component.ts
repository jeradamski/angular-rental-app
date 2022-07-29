import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbDate, NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from "../../services/order.service";
import {Order} from "../../order";

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css'],
})
export class OrderingComponent implements OnInit {

  idBike?: any;
  title = 'appBootstrap';

  fromDate: NgbDate | any;
  toDate: NgbDate | any;

  firstName?: string;
  lastName?: string;
  street?: string;
  houseAndApartmentNumber?: string;
  postalCode?: string;
  city?: string;
  emailAddress?: string;
  phone?: string;
  rentalCost?: string;
  rentalStartingDate?: NgbDateStruct;
  rentalEndDate?: NgbDateStruct;


  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.idBike = this.route.snapshot.paramMap.get('id');
  }

  save(): void {
    this.rentalStartingDate = this.fromDate
    this.rentalEndDate = this.toDate

    if (this.idBike) {
      this.orderService.addOrder(this.idBike, {firstName: this.firstName,
        lastName: this.lastName,
        houseAndApartmentNumber: this.houseAndApartmentNumber, city: this.city,
        postalCode: this.postalCode, emailAddress: this.emailAddress, phone: this.phone,
        rentalCost: this.rentalCost, rentalStartingDate: this.rentalStartingDate,
        rentalEndDate: this.rentalEndDate, street: this.street} as Order).subscribe(
        entry => this.router.navigate([''])
      )
    }

  }

}

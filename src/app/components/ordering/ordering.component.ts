import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbCalendar, NgbDateStruct, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from "../../services/order.service";
import {Order} from "../../order";
import {BikeService} from "../../services/bike.service";
import {Bike} from "../../bike";
import {formatDate} from '@angular/common';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";


@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css'],
})
export class OrderingComponent implements OnInit {

  idBike?: any;
  title = 'appBootstrap';

  fromDate: NgbDateStruct | any;
  toDate: NgbDateStruct | any;
  date: {year: number, month: number} | any;

  firstName?: string;
  lastName?: string;
  street?: string;
  houseAndApartmentNumber?: string;
  postalCode?: string;
  city?: string;
  emailAddress?: string;
  phone?: string;
  rentalCost?: number;
  rentalStartingDate?: string;
  rentalEndDate?: string;
  bike?: Bike;
  form!: FormGroup;
  submitted = false;



  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private route: ActivatedRoute,
    private calendar: NgbCalendar,
    private parserFormatter: NgbDateParserFormatter,
    private bikeService: BikeService,
    private orderService: OrderService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router) {

  }
  getBike(bikeId: number): Bike|any {
    this.bikeService.getBikeById(bikeId).subscribe(bike => this.bike = bike);
  }

  ngOnInit(): void {
    this.idBike = this.route.snapshot.paramMap.get('id');
    this.getBike(this.idBike);

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      fromDate: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10) ]),
      dateTo: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      street: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      houseNumber: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      postalCode: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      city: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
    });

  }

  get registerForm() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form);
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
      }

  save(content: any): void {

    this.rentalCost = this.bike?.rentalPrice

    if (this.idBike && this.form.valid) {

      this.rentalStartingDate = formatDate(this.parserFormatter.format(this.fromDate),'yyyy-MM-dd',this.locale);
      this.rentalEndDate = formatDate(this.parserFormatter.format(this.toDate),'yyyy-MM-dd',this.locale);

      this.orderService.addOrder(this.idBike, {firstName: this.firstName,
        lastName: this.lastName,
        houseAndApartmentNumber: this.houseAndApartmentNumber, city: this.city,
        postalCode: this.postalCode, emailAddress: this.emailAddress, phone: this.phone,
        rentalCost: this.rentalCost, rentalStartingDate: this.rentalStartingDate,
        rentalEndDate: this.rentalEndDate, street: this.street} as Order).subscribe(
        entry => this.router.navigate([''])
      )
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});

    }

  }
}

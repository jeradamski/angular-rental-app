import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export class Order {

  bikeId?: number;
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

}

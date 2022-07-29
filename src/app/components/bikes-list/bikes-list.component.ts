import { Component, OnInit } from '@angular/core';
import { Bike } from '../../bike'
import {BikeService} from "../../services/bike.service";


@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {

  bikes: Bike[] | undefined

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getBikes()
  }

  getBikes(): void {
    this.bikeService.getBikes().subscribe(bikes => this.bikes = bikes);
  }

}

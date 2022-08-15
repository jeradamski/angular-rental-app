import { Component, OnInit } from '@angular/core';
import {Order} from "../../order";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders!: Order[]

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

}




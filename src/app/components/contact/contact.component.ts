import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = 50.059823097658075;
  lng = 19.911773189535452;

  constructor() { }

  ngOnInit(): void {
  }

}

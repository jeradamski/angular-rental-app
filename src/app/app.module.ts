import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BikesListComponent } from './components/bikes-list/bikes-list.component';
import { AboutComponent } from './components/about/about.component';
import { OrderingComponent } from './components/ordering/ordering.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NavigationComponent } from './navigation/navigation.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    AppComponent,
    BikesListComponent,
    AboutComponent,
    OrderingComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

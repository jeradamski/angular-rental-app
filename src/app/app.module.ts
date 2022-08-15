import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BikesListComponent } from './components/bikes-list/bikes-list.component';
import { AboutComponent } from './components/about/about.component';
import { OrderingComponent } from './components/ordering/ordering.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NavigationComponent } from './navigation/navigation.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesListComponent,
    AboutComponent,
    OrderingComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: ''})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {BikesListComponent} from "./components/bikes-list/bikes-list.component";
import {AboutComponent} from "./components/about/about.component";
import {AppComponent} from "./app.component";
import {OrderingComponent} from "./components/ordering/ordering.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'list', component: BikesListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'ordering/:id', component: OrderingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

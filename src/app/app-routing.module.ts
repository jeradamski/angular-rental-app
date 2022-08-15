import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {BikesListComponent} from "./components/bikes-list/bikes-list.component";
import {AboutComponent} from "./components/about/about.component";
import {OrderingComponent} from "./components/ordering/ordering.component";
import {MainComponent} from "./components/main/main.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list', component: BikesListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'ordering/:id', component: OrderingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'administration', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

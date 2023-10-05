import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';

const routes: Routes = [
  // employee-add
  {path: 'add', component:CustomerAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

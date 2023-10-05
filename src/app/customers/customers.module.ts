import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomersComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }

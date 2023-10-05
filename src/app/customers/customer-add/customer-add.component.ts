import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(public customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }
  //Insert
  addCustomer(form: NgForm) {
    console.log("Inserting..");
    this.customerService.insertCustomer(form.value).subscribe(
      (response) => {
        console.log(response);

      },
      (error) => {
        console.log(error);

      }
    )

  }
  //Submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    //Insert
    this.addCustomer(form);
    form.resetForm();
    this.router.navigateByUrl("/customers/list");
  }

}

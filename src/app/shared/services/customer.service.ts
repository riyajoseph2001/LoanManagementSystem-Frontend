import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { LoanOfficer } from '../models/loan-officer';
import { Loan } from '../models/loan';
import { Status } from '../models/status';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //declare variables--global variables
  formCustomerData:Customer = new Customer();

  //list of Customers
  customers: Customer[];

  //list of LoanOfficers
  loanOfficers: LoanOfficer[];

  //list of Loan
  loans: Loan[];

  //list of status
  statuses: Status[];

  //dependency injection -- Constructor
  constructor(private httpClient: HttpClient) { }
  // 1 Get all Customers - Promises
  // http://localhost:9091/api/customers
  getAllCustomers(): void{

    //getting the data
    this.httpClient.get(environment.apiUrl + '/api/customers')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.customers = response as Customer[];
    },
    error =>{
      console.log(error);
      
    });
    

  }

  // Get all Customers - Observable Types
  getAllCustomerslist(): Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/customers')

  }

  // Insert
  insertCustomer(customer: Customer): Observable<any>{

    return this.httpClient.post(environment.apiUrl + '/api/customers',customer);

  }
  
}

import {Component, Injectable, OnInit} from '@angular/core';
import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {MatDialog} from '@angular/material/dialog';
import { CustomerUpdate, CustomerDelete } from '../customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent {
  customers: Observable<Customer[]>;

  constructor(private store: Store<{ customers: Customer[] }>,private matDialog:MatDialog) {
    this.customers = store.pipe(select('customer'));
  }

  update(i:number){
    this.matDialog.open(ApprovedPopUpDialog,{width:'254px',height:'200px'});
    ApprovedPopUpDialog.i=i;
    console.log(i);
  }

  delete(i:number){
    this.store.dispatch(new CustomerDelete(i)); 
  }


}


@Component({
  selector: 'approved-popup',
  templateUrl: 'approved-popup.html',
})


@Injectable({ providedIn: 'root' })
export class ApprovedPopUpDialog implements OnInit {
  static i:number=0;
  customerName;
  constructor(private store: Store<{ customers: Customer[] }>) {
   
  }

  ngOnInit(): void {
  }

  update(){
    const customer = new Customer(); 
    customer.name = this.customerName; 
    this.store.dispatch(new CustomerUpdate(customer)); 

  }

  sendOption(){
  }
}


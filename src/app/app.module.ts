import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'; 
import { CustomerReducer } from './customer.reducer';
import { CustomersViewComponent, ApprovedPopUpDialog } from './customers-view/customers-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomersViewComponent,
    CustomerAddComponent,
    ApprovedPopUpDialog
    
    
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ customers: CustomerReducer }),
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  entryComponents:[ApprovedPopUpDialog],
  bootstrap: [AppComponent]

})
export class AppModule { }

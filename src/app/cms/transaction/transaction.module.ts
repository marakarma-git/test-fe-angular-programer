import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';



@NgModule({
  declarations: [
    TransactionComponent,
    TransactionListComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }

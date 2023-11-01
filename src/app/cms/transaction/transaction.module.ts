import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

const routes : Routes = [
  {
    path:'',
    component:TransactionComponent,
    children:[
      {path:'transaction/list', component:TransactionListComponent},
      {path:'transaction/history', component:TransactionHistoryComponent},

    ]
  }
]

@NgModule({
  declarations: [
    TransactionComponent,
    TransactionListComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule,
  ]
})
export class TransactionModule { }

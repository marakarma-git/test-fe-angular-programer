import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from '../cms/user/user.module';
import { TransactionModule } from '../cms/transaction/transaction.module';
import { ProductModule } from '../cms/product/product.module';
import { CategoryModule } from '../cms/category/category.module';
const routes: Routes = [
  {
    path:'',
    component:CmsComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: ()=> import('../cms/dashboard/dashboard.module').then(module=>module.DashboardModule)
      },
      {
        path:'user',
        loadChildren: ()=> import('../cms/user/user.module').then(module=>module.UserModule)
      },
      {
        path:'transaction',
        loadChildren: ()=> import('../cms/transaction/transaction.module').then(module=>module.TransactionModule)
      },
      {
        path:'product',
        loadChildren: ()=> import('../cms/product/product.module').then(module=>module.ProductModule)
      },
      {
        path:'category',
        loadChildren: ()=> import('../cms/category/category.module').then(module=>module.CategoryModule)
      }
    ]
  }
]


@NgModule({
  declarations: [
    CmsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    DashboardModule,
    UserModule,
    TransactionModule,
    ProductModule,
    CategoryModule
  ]
})
export class CmsModule { }

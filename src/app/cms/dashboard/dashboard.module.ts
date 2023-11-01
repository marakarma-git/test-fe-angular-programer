import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

const routes : Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'dashboard/index', component:DashboardIndexComponent}
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardIndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

const routes : Routes = [
  {
    path:'',
    component:CategoryComponent,
    children:[
      {path:'category/list', component:CategoryListComponent},
      {path:'category/add', component:CategoryAddComponent},
      {path:'category/update', component:CategoryUpdateComponent},
      {path:'category/detail', component:CategoryDetailComponent},

    ]
  }
]

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    CategoryDetailComponent
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
export class CategoryModule { }

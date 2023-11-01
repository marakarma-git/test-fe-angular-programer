import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {path:'user/index',component:UserIndexComponent},
      {path:'user/create',component:UserCreateComponent},
      {path:'user/:id/update',component:UserUpdateComponent},

    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserIndexComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class UserModule { }

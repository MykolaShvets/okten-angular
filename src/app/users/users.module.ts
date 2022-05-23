import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent, UserDetailsComponent, UserComponent } from './components';
import { UserService, UsersResolver, UserDetailsResolver } from './services';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UsersResolver,
    UserDetailsResolver
  ]
})
export class UsersModule { }

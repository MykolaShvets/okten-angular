import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserDetailsComponent, UsersComponent} from "./components";
import {UserDetailsResolver, UsersResolver} from "./services";

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {usersData: UsersResolver}, children: [
      {path: ':userId', resolve: {userDetails: UserDetailsResolver}, component: UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

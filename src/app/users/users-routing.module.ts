import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserDetailsComponent, UsersComponent} from "./user-components";

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':userId', component: UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

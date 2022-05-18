import { Component, OnInit } from '@angular/core';

import {UserService} from "../../user-services/user.service";
import {IUser} from "../../../interfaces/user.inteface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this
      .userService
      .getUsers()
      .subscribe(value => this.users = value);
  }

}

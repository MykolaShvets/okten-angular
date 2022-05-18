import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../interfaces/user.inteface";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../user-services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,  private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({userId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
      if(state){
        this.currentUser  = state
      } else {
        this.userService.getUser(userId).subscribe(value => this.currentUser = value)
      }

    } )
  }

}

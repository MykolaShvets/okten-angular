import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { IUser } from '../../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({userId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
      if(state){
        this.currentUser  = state
      } else {
        this.activatedRoute.data.subscribe(({userDetails}) => this.currentUser = userDetails as IUser);
      }
    })
  }

}

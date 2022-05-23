import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IUser} from "../interfaces";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<IUser> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const id = route.params['userId'];
    return this.userService.getUser(id);
  }
}

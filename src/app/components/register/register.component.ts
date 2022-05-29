import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {Router} from "@angular/router";

import {registerValidator} from "../../validators";
import {AuthService} from "../../services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  userNameError: string

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void{
    this.form = new FormGroup({
      username: new FormControl(null, registerValidator.username),
      password: new FormControl(null, registerValidator.password),
      confirmPassword: new FormControl(null, registerValidator.confirmPassword)
    }, [this._checkPass])
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;
    this.authService.register(rawValue).subscribe({
      next: () => this.router.navigate(['login']),
      error: e => this.userNameError = e.errors.username[0]
    }
      );
  }

  _checkPass(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {notSame: true};
  }

}

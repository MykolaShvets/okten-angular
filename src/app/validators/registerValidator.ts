import {Validators} from "@angular/forms";

import {regEx} from "../constants";

export const registerValidator = {
  username: [
    Validators.required,
    Validators.pattern(regEx.username)
  ],
  password: [
    Validators.required,
    Validators.pattern(regEx.password)
  ],
  confirmPassword: [
    Validators.required,
    Validators.pattern(regEx.password)
  ]
}


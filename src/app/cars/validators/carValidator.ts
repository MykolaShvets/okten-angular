import {Validators} from "@angular/forms";

import {regEx} from "../../constants";

export const carValidator = {
  model: [Validators.pattern(regEx.model)],
  price: [Validators.min(0), Validators.max(1000000)],
  year: [Validators.min(1990), Validators.max(new Date().getFullYear())]
}

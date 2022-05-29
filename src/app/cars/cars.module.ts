import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { CarsComponent } from './components';
import {CarsRoutingModule} from "./cars-routing.module";

@NgModule({
  declarations: [
    CarsComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }

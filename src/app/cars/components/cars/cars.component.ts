import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {carValidator} from "../../validators";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

_createForm(): void{
    this.form = new FormGroup({
      model: new FormControl(null, carValidator.model),
      year: new FormControl(1990, carValidator.year),
      price: new FormControl(0, carValidator.price)
    })
}
  save(): void{
    if(!this.carForUpdate){
      this.carService.createCar(this.form.value).subscribe(value => {
        this.cars.push(value);
        this.form.reset();
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        const updatedCar = this.cars.find(car => car.id === this.carForUpdate?.id);
        Object.assign(updatedCar, value);
        this.carForUpdate = null;
        this.form.reset();
      })
    }

  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car=> car.id === id);
      this.cars.splice(index, 1);
    })
  }

  update(car: ICar) {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}

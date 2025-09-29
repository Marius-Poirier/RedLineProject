import { Component, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FestivalDTO } from '../festival-dto';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-festival-form',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './festival-form.html',
  styleUrl: './festival-form.css'
})
export class FestivalForm {
  createFestival = output<FestivalDTO>();

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    year: new FormControl(2025, { nonNullable: true }),
    location: new FormControl('', { nonNullable: true }),
    isCurrent: new FormControl(false, { nonNullable: true })
    });

  submit(): void {
    const festival: FestivalDTO = {
      id: 0,
      name: this.form.get('name')!.value,
      location: this.form.get('location')!.value,
      year: this.form.get('year')!.value,
      isCurrent: this.form.get('isCurrent')!.value
    };
    this.createFestival.emit(festival);
    this.form.reset();
  }
}
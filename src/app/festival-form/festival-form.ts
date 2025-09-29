import { Component, inject, input, output, effect } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FestivalService } from '../festival-service';
import { FestivalDTO } from '../festival-dto';

@Component({
  selector: 'app-festival-form',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './festival-form.html',
  styleUrl: './festival-form.css'
})

export class FestivalForm {
  formVisibleChange = output<boolean>();
  readonly festivals = inject(FestivalService)
  formValues = input<FestivalDTO>()

  constructor() {
    effect(() => {
      this.setFormValues(this.formValues());
    });
  }
  
  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    year: new FormControl(2025, { nonNullable: true }),
    location: new FormControl('', { nonNullable: true }),
    isCurrent: new FormControl(false, { nonNullable: true })
    });

  submit(): void {
    const name = this.form.get('name')!.value;
    const location = this.form.get('location')!.value;
    const year = this.form.get('year')!.value;
    const isCurrent = this.form.get('isCurrent')!.value;
    this.festivals.add(name, location, year, isCurrent);
    this.form.reset();
  }

  setFormValues(festival: FestivalDTO | undefined): void {
    if (festival) {
      this.form.setValue({name: festival.name, location: festival.location, year: festival.year, isCurrent: festival.isCurrent });
    } else {
      this.form.reset();
    }
  }
}
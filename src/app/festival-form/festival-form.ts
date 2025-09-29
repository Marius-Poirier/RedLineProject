import { Component, inject, output, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FestivalService } from '../festival-service';

@Component({
  selector: 'app-festival-form',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './festival-form.html',
  styleUrl: './festival-form.css'
})

export class FestivalForm {
  readonly festivals = inject(FestivalService)
  
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
}
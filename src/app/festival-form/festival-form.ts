import { Component, output, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FestivalDTO } from '../festival-dto';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-festival-form',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './festival-form.html',
  styleUrl: './festival-form.css'
})
export class FestivalForm {
  form = signal<FestivalDTO>({ id: 0, name: '', location: '', year: 0, isCurrent: false });
  createFestival = output<FestivalDTO>();

  submit(event: Event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const festival: FestivalDTO = {
      id: 0,
      name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
      location: (formElement.elements.namedItem('location') as HTMLInputElement).value,
      year: +(formElement.elements.namedItem('year') as HTMLInputElement).value,
      isCurrent: (formElement.elements.namedItem('isCurrent') as HTMLInputElement).checked
    };
    this.createFestival.emit(festival);
    formElement.reset();
  }
}
import { Component, output, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FestivalDTO } from '../festival-dto';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-festival-form',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './festival-form.html',
  styleUrl: './festival-form.css'
})
export class FestivalForm {
  form = signal<FestivalDTO>({ id: 0, name: '', location: '', year: 0 });
  createFestival = output<FestivalDTO>();

  submit(event: Event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const festival: FestivalDTO = {
      id: 0,
      name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
      location: (formElement.elements.namedItem('location') as HTMLInputElement).value,
      year: +(formElement.elements.namedItem('year') as HTMLInputElement).value
    };
    this.createFestival.emit(festival);
    formElement.reset();
  }
}
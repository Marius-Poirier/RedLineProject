import { Component, signal, WritableSignal, computed } from '@angular/core';
import { FestivalDTO } from '../festival-dto';
import { FestivalCardComponent } from '../festival-card-component/festival-card-component';
import { FestivalForm } from '../festival-form/festival-form';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-festival-list',
  imports: [FestivalCardComponent, FestivalForm, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './festival-list.html',
  styleUrl: './festival-list.css'
})

export class FestivalList {
festival1 : FestivalDTO = {id: 1, name: 'Glastonbury', location: 'UK', year: 2023, isCurrent: false};
festival2 : FestivalDTO = {id: 2, name: 'Tomorrowland', location: 'Belgium', year: 2023, isCurrent: false};
festival3 : FestivalDTO = {id: 3, name: 'Coachella', location: 'USA', year: 2023, isCurrent: false};

lastId = 3;
festivals : FestivalDTO[] = [this.festival1, this.festival2, this.festival3];
nbFest = computed(() => this.items().length)

items: WritableSignal<FestivalDTO[]> = signal(this.festivals);

removeFestival(id?: number) {
  this.items.set(this.items().filter(festival => festival.id !== id));
}

addFestival(festival: FestivalDTO) {
  console.log(festival);
  const newFestival: FestivalDTO = {
    id: this.items().length + 1,
    name: festival.name,
    location: festival.location,
    year: festival.year,
    isCurrent: festival.isCurrent
  };
  console.log(newFestival);
  this.items.set([...this.items(), newFestival]);
}
}
  
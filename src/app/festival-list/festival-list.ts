import { Component, signal, WritableSignal } from '@angular/core';
import { FestivalDTO } from '../festival-dto';
import { FestivalCardComponent } from '../festival-card-component/festival-card-component';

@Component({
  selector: 'app-festival-list',
  imports: [FestivalCardComponent],
  templateUrl: './festival-list.html',
  styleUrl: './festival-list.css'
})

export class FestivalList {
festival1 : FestivalDTO = {id: 1, name: 'Glastonbury', location: 'UK', year: 2023};
festival2 : FestivalDTO = {id: 2, name: 'Tomorrowland', location: 'Belgium', year: 2023};
festival3 : FestivalDTO = {id: 3, name: 'Coachella', location: 'USA', year: 2023};

festivals : FestivalDTO[] = [this.festival1, this.festival2, this.festival3];

items: WritableSignal<FestivalDTO[]> = signal(this.festivals);
}
  
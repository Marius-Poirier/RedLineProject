import { Component, computed, effect, inject, signal } from '@angular/core';
import { FestivalCardComponent } from '../festival-card-component/festival-card-component';
import { FestivalForm } from '../festival-form/festival-form';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {FestivalService} from '../festival-service'

@Component({
  selector: 'app-festival-list',
  imports: [FestivalCardComponent, FestivalForm, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatIconModule],
  templateUrl: './festival-list.html',
  styleUrl: './festival-list.css'
})

export class FestivalList {
  readonly festivals = inject(FestivalService)
  formVisible = signal(false);

  constructor(){
    effect(() => {
      console.log("number of festivals: ", this.nbFest())
      console.log("number of active festivals: ", this.activeFestivals())
      localStorage.setItem("festivals", JSON.stringify(this.items()))
    })
  }

  nbFest = this.festivals.nbFestivals
  activeFestivals = computed(() => this.items().filter(festival => festival.isCurrent).length)

  items = this.festivals.festivalsList; 

  removeFestival(id?: number) {
    this.festivals.remove(id);
  }
}
  
import { computed, Injectable, signal } from '@angular/core';
import {FestivalDTO} from './festival-dto'

@Injectable({
  providedIn: 'root'
})
export class FestivalService {
    private readonly _festivals = signal<FestivalDTO[]>([
      { id: 0, name: 'Summer Beats', location: 'Berlin', year: 2022, isCurrent: false },
      { id: 1, name: 'Winter Jam', location: 'Oslo', year: 2023, isCurrent: true },
      { id: 2, name: 'Spring Fest', location: 'Paris', year: 2021, isCurrent: false }
    ]);
    nextId = 3;

  add(name: string, location: string, year: number, isCurrent: boolean){
    const newFest: FestivalDTO = {id: this.nextId, name: name, location: location, year: year, isCurrent: isCurrent};
    this._festivals.update(festivals => [...festivals, newFest]);
    this.nextId++;
  }

  getFirstId(){
    const festivals = this.festivalsList();
    if (festivals.length === 0) return null;
    return festivals[0].id;
  }

  getNextId(currentId: number){
    const festivals = this.festivalsList();
    if (festivals.length === 0) return null;
    const idx = festivals.findIndex(festival => festival.id === currentId);
    if (idx === -1 || idx === festivals.length - 1) return null;
    return festivals[idx + 1].id;

  }

  readonly festivalsList = this._festivals.asReadonly()
  readonly nbFestivals = computed(() => this.festivalsList().length);

  clear(){
    this._festivals.set([]);
  }

  findById(id: number){
    const festival = this.festivalsList().find(festival => festival.id === id);
    return festival ?? null;
  }

  remove(id?: number) {
    if (id === undefined) return;
    this._festivals.update(festivals => festivals.filter(festival => festival.id !== id));
  }
}

import { computed, Injectable, signal } from '@angular/core';
import { ExposantDTO } from './exposant-dto';

@Injectable({
  providedIn: 'root'
})
export class ExposantService {
  private readonly _exposants = signal<ExposantDTO[]>([
    { id: 0, name: 'Tech Books Publishing', type: 'editor', email: 'contact@techbooks.com' },
    { id: 1, name: 'Global Distribution Co', type: 'distributor', email: 'info@globaldist.com' },
    { id: 2, name: 'Creative Partners', type: 'partner', email: 'hello@creativepartners.com' }
  ]);
  nextId = 3;

  add(name: string, type: ExposantDTO['type'], email: string) {
    const newExposant: ExposantDTO = { id: this.nextId, name: name, type: type, email: email };
    console.log('Adding exposant:', newExposant);
    console.log('Current exposants before add:', this._exposants());
    this._exposants.update(exposants => [...exposants, newExposant]);
    this.nextId++;
    console.log('All exposants after add:', this._exposants());
  }

  update(id: number, name: string, type: ExposantDTO['type'], email: string) {
    this._exposants.update(exposants => exposants.map(exposant => 
      exposant.id === id ? { id: id, name: name, type: type, email: email } : exposant
    ));
  }

  readonly exposantsList = this._exposants.asReadonly();
  readonly nbExposants = computed(() => this.exposantsList().length);

  clear() {
    this._exposants.set([]);
  }

  findById(id: number) {
    const exposant = this.exposantsList().find(exposant => exposant.id === id);
    return exposant ?? null;
  }

  remove(id?: number) {
    if (id === undefined) return;
    this._exposants.update(exposants => exposants.filter(exposant => exposant.id !== id));
  }
}

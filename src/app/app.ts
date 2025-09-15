import { Component, signal } from '@angular/core';
import {FestivalList} from './festival-list/festival-list';

@Component({
  selector: 'app-root',
  imports: [FestivalList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RedLineProject');
}

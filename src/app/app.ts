import { Component, signal } from '@angular/core';
import {FestivalList} from './festival-list/festival-list';
import {Header} from './header/header'
import {Sidebar} from './sidebar/sidebar'
import {ExposantForm} from './exposant-form/exposant-form'

@Component({
  selector: 'app-root',
  imports: [FestivalList, Header, Sidebar,ExposantForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RedLineProject');
}

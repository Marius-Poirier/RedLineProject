import { Component, signal } from '@angular/core';
import {FestivalList} from './festival-list/festival-list';
import {Header} from './header/header'
import {Sidebar} from './sidebar/sidebar'

@Component({
  selector: 'app-root',
  imports: [FestivalList, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RedLineProject');
}

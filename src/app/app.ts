import { Component, signal } from '@angular/core';
import {Menu} from './menu/menu'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RedLineProject');
}

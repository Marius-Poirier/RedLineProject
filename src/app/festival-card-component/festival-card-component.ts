import { Component, input, output} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FestivalDTO } from '../festival-dto';

@Component({
  selector: 'app-festival-card-component',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './festival-card-component.html',
  styleUrl: './festival-card-component.css'
})
export class FestivalCardComponent {
  festival = input<FestivalDTO>()
  remove = output<void>();
  edit = output<void>();
}

import { Component, input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FestivalDTO } from '../festival-dto';

@Component({
  selector: 'app-festival-card-component',
  imports: [MatCardModule],
  templateUrl: './festival-card-component.html',
  styleUrl: './festival-card-component.css'
})
export class FestivalCardComponent {
  festival = input<FestivalDTO>()
}

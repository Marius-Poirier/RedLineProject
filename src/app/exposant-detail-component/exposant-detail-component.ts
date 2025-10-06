import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ExposantService } from '../exposant-service';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExposantDTO } from '../exposant-dto';

@Component({
  selector: 'app-exposant-detail-component',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './exposant-detail-component.html',
  styleUrl: './exposant-detail-component.css'
})

export class ExposantDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private exposantService = inject(ExposantService);
  private exposantId$ = this.route.paramMap.pipe(
    map(params => params.get('id'))
  );
  
  private exposantIdSignal = toSignal(this.exposantId$, { initialValue: null });

  public exposant = computed<ExposantDTO | null>(() => {
    if (this.exposantIdSignal() != null) {
      console.log('Looking for exposant with ID:', this.exposantIdSignal());
      console.log('All exposants:', this.exposantService.exposantsList());
      const found = this.exposantService.findById(Number(this.exposantIdSignal()));
      console.log('Found exposant:', found);
      return found;
    }
    return null;
  });

  goBackToList() {
    this.router.navigate(['/exposants']);
  }

  getTypeLabel(type: ExposantDTO['type']): string {
    const typeMap = {
      'editor': 'Éditeur',
      'distributor': 'Distributeur',
      'partner': 'Partenaire',
      'editor service': 'Prestataire Éditeur',
      'shop': 'Boutique'
    };
    return typeMap[type] || type;
  }
}

import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ExposantDTO } from '../exposant-dto';
import { ExposantService } from '../exposant-service';

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
  
  exposant: ExposantDTO | null = null;
  exposantId: string | null = null;

  constructor() {
    this.exposantId = this.route.snapshot.paramMap.get('id');
        
    if (this.exposantId) {
      console.log('Looking for exposant with ID:', this.exposantId);
      console.log('All exposants:', this.exposantService.exposantsList());
      this.exposant = this.exposantService.findById(Number(this.exposantId));
      console.log('Found exposant:', this.exposant);
    }
  }

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

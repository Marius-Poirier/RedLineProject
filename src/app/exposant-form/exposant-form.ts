import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trimmedMinLenght } from '../../shared/validators/trimmedMinLength';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { ExposantDTO } from '../exposant-dto';
import { ExposantService } from '../exposant-service';

@Component({
  selector: 'app-exposant-form',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatSnackBarModule],
  templateUrl: './exposant-form.html',
  styleUrl: './exposant-form.css'
})
export class ExposantForm {
  private exposantService = inject(ExposantService);
  private snackBar = inject(MatSnackBar);
  readonly typeOptions: ExposantDTO['type'][] = [
    'editor',
    'distributor', 
    'partner',
    'editor service',
    'shop'
  ];

  readonly exposantForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required, Validators.minLength(3), trimmedMinLenght ], nonNullable: true }),
    type: new FormControl<ExposantDTO['type'] | ''>('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.email, Validators.required], nonNullable: true }),
  });

  onSubmit() {
    if (this.exposantForm.valid) {
      const formValue = this.exposantForm.value;
      
      // Since form is valid, we can safely assert these values exist
      this.exposantService.add(
        formValue.name!,
        formValue.type as ExposantDTO['type'],
        formValue.email!
      );
      
      this.snackBar.open('Exposant ajouté avec succès!', 'Fermer', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
      
      this.exposantForm.reset();
    }
  }

  getError(controlName: string): string | null {
  const control = this.exposantForm.get(controlName);
  
  if (!control || !control.errors || !control.touched) {
    return null;
  }
  
  if (control.errors['required']) {
    return 'This field is required';
  }
  
  if (control.errors['minlength']) {
    return `Minimum length is 3 characters`;
  }

  if (control.errors['trimmedMinLength']) {
    return 'Minimum length is 3 characters (excluding spaces)';
  }
  
  if (control.errors['email']) {
    return 'Please enter a valid email address';
  }
  
  return 'Invalid input';
}

}

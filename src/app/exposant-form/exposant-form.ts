import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trimmedMinLenght } from '../../shared/validators/trimmedMinLength';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-exposant-form',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './exposant-form.html',
  styleUrl: './exposant-form.css'
})
export class ExposantForm {
  readonly exposantForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required, Validators.minLength(3),trimmedMinLenght ], nonNullable: true }),
    type: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.email, Validators.required], nonNullable: true }),
  });

  onSubmit() {
    if (this.exposantForm.valid) {
      console.log('Form submitted:', this.exposantForm.value);
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

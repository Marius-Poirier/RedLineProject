import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const trimmedMinLenght: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    
    if (!value) {
        return null;
    }
    
    const trimmedValue = value.trim();
    const minLength = 3;    
    
    return trimmedValue.length >= minLength ? null : { trimmedMinLength: true };
}
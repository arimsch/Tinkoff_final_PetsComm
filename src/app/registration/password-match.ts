import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordsMatch(
  control: AbstractControl
): ValidationErrors | null {
  return control.get('password')?.value ===
    control.get('confirmPassword')?.value
    ? null
    : { nomatch: true };
}

import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { patternValidators } from './validators-params';
import { TextErrors } from './text-errors';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
})
export class ValidatorsComponent {
  @Input() public field: AbstractControl | null = null;

  public printError(): TuiValidationError | null {
    if (this.field?.errors && (this.field.dirty || this.field.touched)) {
      return this.makeMessageError(this.field.errors);
    }
    return null;
  }

  private makeMessageError(
    errorObj: ValidationErrors
  ): TuiValidationError | null {
    let errorType = Object.keys(errorObj)[0];
    console.log(errorType);
    switch (errorType) {
      case 'pattern': {
        return new TuiValidationError(
          patternValidators[errorObj['pattern'].requiredPattern]
        );
      }
      case 'required': {
        return new TuiValidationError(TextErrors.REQUIRED);
      }
      case 'minlength': {
        return new TuiValidationError(
          TextErrors.MIN_LENGTH + errorObj['minlength'].requiredLength
        );
      }
      case 'nomatch': {
        return new TuiValidationError(TextErrors.NO_MATCH);
      }
    }
    return null;
  }
}

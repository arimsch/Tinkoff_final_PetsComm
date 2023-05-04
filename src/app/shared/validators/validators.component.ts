import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import {
  HAVE_BIGLETTER_PATTERN,
  HAVE_NUMBER_PATTERN,
  HAVE_SLETTER_PATTERN,
  HAVE_SPECIAL_SYM,
  TYPE_MAIL,
} from './registration-validators-params';
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
    switch (errorType) {
      case 'pattern': {
        if (errorObj['pattern'].requiredPattern === `${HAVE_NUMBER_PATTERN}`) {
          return new TuiValidationError(TextErrors.PASSWORD_NO_NUMBER);
        }
        if (errorObj['pattern'].requiredPattern === `${HAVE_SLETTER_PATTERN}`) {
          return new TuiValidationError(TextErrors.PASSWORD_NO_SLETTER);
        }
        if (
          errorObj['pattern'].requiredPattern === `${HAVE_BIGLETTER_PATTERN}`
        ) {
          return new TuiValidationError(TextErrors.PASSWORD_NO_BLETTER);
        }
        if (errorObj['pattern'].requiredPattern === `${HAVE_SPECIAL_SYM}`) {
          return new TuiValidationError(TextErrors.SPECIAL_SYM);
        }
        if (errorObj['pattern'].requiredPattern === `${TYPE_MAIL}`) {
          return new TuiValidationError(TextErrors.FALSE_MAIL);
        }
        break;
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

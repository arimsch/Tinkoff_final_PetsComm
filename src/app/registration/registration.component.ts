import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegistrationService } from 'src/app/registration/registration.service';
import {
  HAVE_BIGLETTER_PATTERN,
  HAVE_NUMBER_PATTERN,
  HAVE_SLETTER_PATTERN,
  TYPE_MAIL,
  ValidatorsLength,
} from '../shared/validators/registration-validators-params';
import { passwordsMatch } from './password-match';
import { TuiAlertService } from '@taiga-ui/core';
import { DestroyService } from '../core/destroy.service';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public registrationForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly registrationService: RegistrationService,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    @Inject(DestroyService) private readonly destroy$: Observable<void>
  ) {}

  ngOnInit(): void {
    this.buildRegistrationForm();
    this.registrationService.registrationErrMessage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(err => this.createAlertError(err));
  }

  public get displayName(): AbstractControl | null {
    return this.registrationForm.get('displayName');
  }

  public get emailField(): AbstractControl | null {
    return this.registrationForm.get('email');
  }

  public get passwordField(): AbstractControl | null {
    return this.registrationForm.get('password');
  }

  public registration(formValue: FormGroup): void {
    let { email, password, displayName } = formValue.value;
    this.registrationService.registration(email, password, displayName);
  }

  private createAlertError(err: string): void {
    this.alerts.open(err, { label: 'Ошибка' }).subscribe();
  }

  private buildRegistrationForm(): void {
    this.registrationForm = this.fb.group(
      {
        displayName: [
          null,
          [
            Validators.required,
            Validators.minLength(ValidatorsLength.MIN_LENGTH_DISPLAY_NAME),
            Validators.maxLength(ValidatorsLength.MAX_LENGTH_DISPLAY_NAME),
          ],
        ],
        email: [
          null,
          [
            Validators.required,
            Validators.maxLength(ValidatorsLength.MAX_LENGTH_MAIL),
            Validators.pattern(TYPE_MAIL),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(HAVE_NUMBER_PATTERN),
            Validators.pattern(HAVE_BIGLETTER_PATTERN),
            Validators.pattern(HAVE_SLETTER_PATTERN),
            Validators.minLength(ValidatorsLength.MIN_LENGTH_PASSW),
          ],
        ],
        confirmPassword: [''],
      },
      { validators: passwordsMatch }
    );
  }
}

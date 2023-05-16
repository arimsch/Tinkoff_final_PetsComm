import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegistrationService } from 'src/shared/services/registration.service';
import {
  HAVE_BIGLETTER_PATTERN,
  HAVE_NUMBER_PATTERN,
  HAVE_SLETTER_PATTERN,
  TYPE_MAIL,
  ValidatorsLength,
} from '../shared/validators/registration-validators-params';
import { passwordsMatch } from './password-match';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../../assets/styles/common-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public signUpForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly registrationService: RegistrationService,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  ngOnInit(): void {
    this.buildSignUpForm();
    this.initAlertError();
  }

  public get _displayName(): AbstractControl | null {
    return this.signUpForm.get('displayName');
  }

  public get _emailField(): AbstractControl | null {
    return this.signUpForm.get('email');
  }

  public get _passwordField(): AbstractControl | null {
    return this.signUpForm.get('password');
  }

  public signUp(formValue: FormGroup): void {
    let { email, password, displayName } = formValue.value;
    this.registrationService.signUp(email, password, displayName);
  }

  private initAlertError(): void {
    this.registrationService.signUpErrMessage$.subscribe(val => {
      this.alerts.open(`${val}`, { label: 'Ошибка' }).subscribe();
    });
  }

  private buildSignUpForm(): void {
    this.signUpForm = this.fb.group(
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

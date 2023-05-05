import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../assets/styles/common-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public signInForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  ngOnInit(): void {
    this.buildSignInForm();
    this.initAlertError();
  }

  public get _emailField(): AbstractControl | null {
    return this.signInForm.get('email');
  }

  public get _passwordField(): AbstractControl | null {
    return this.signInForm.get('password');
  }

  public signIn(formValue: FormGroup): void {
    let { email, password } = formValue.value;
    this.authService.login(email, password);
  }

  private initAlertError(): void {
    this.authService.loginErrMessage$.subscribe(val => {
      this.alerts.open(`${val}`, { label: 'Ошибка' }).subscribe();
    });
  }

  private buildSignInForm(): void {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DestroyService } from '../core/destroy.service';
import { Observable, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  public authForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    @Inject(DestroyService) private readonly destroy$: Observable<void>,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  ngOnInit(): void {
    this.buildAuthForm();
    this.initAlertError();
  }

  public get emailField(): AbstractControl | null {
    return this.authForm.get('email');
  }

  public get passwordField(): AbstractControl | null {
    return this.authForm.get('password');
  }

  public auth(formValue: FormGroup): void {
    let { email, password } = formValue.value;
    this.authService.auth(email, password);
  }

  private createAlertError(err: string): void {
    this.alerts.open(err, { label: 'Ошибка' }).subscribe();
  }

  private initAlertError(): void {
    this.authService.authErrMessage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(err => this.createAlertError(err));
  }

  private buildAuthForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}

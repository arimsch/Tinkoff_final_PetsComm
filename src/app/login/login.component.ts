import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../assets/styles/common-styles.less'],
})
export class LoginComponent {
  public signInForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly auth: AuthService) {}

  ngOnInit(): void {
    this.buildSignInForm();
  }

  public get _emailField(): AbstractControl | null {
    return this.signInForm.get('email');
  }

  public get _passwordField(): AbstractControl | null {
    return this.signInForm.get('password');
  }

  public signIn(): void {
    this.auth.signIn('a@a', '12345');
  }

  private buildSignInForm(): void {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}

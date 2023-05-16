import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
  TUI_INPUT_PASSWORD_OPTIONS,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  providers: [
    {
      provide: TUI_INPUT_PASSWORD_OPTIONS,
      useValue: {
        ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
        icons: {
          hide: 'tuiIconEyeOff',
          show: 'tuiIconEye',
        },
      },
    },
    AuthService,
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiInputModule,
    SharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
  TUI_INPUT_PASSWORD_OPTIONS,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { SharedModule } from '../shared/shared.module';
import { RegistrationService } from 'src/app/registration/registration.service';
import { RegistrationRoutingModule } from './registration-routing.module';

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
    RegistrationService,
  ],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiInputModule,
    TuiErrorModule,
    SharedModule,
    RegistrationRoutingModule,
  ],
})
export class RegistrationModule {}

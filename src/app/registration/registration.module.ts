import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
  imports: [CommonModule],
})
export class RegistrationModule {}

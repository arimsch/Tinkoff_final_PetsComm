import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { UserLineComponent } from './user-line/user-line.component';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { ButtonComponent } from './button/button.component';
import { ValidatorsComponent } from './validators/validators.component';

@NgModule({
  declarations: [UserLineComponent, ButtonComponent, ValidatorsComponent],
  exports: [UserLineComponent, ButtonComponent, ValidatorsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TuiAvatarModule,
    TuiButtonModule,
    TuiErrorModule,
  ],
})
export class SharedModule {}

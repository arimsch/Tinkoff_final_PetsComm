import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLineComponent } from './user-line.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [UserLineComponent],
  exports: [UserLineComponent],
  imports: [CommonModule, TuiAvatarModule],
})
export class UserLineModule {}

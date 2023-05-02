import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { UserLineComponent } from './user-line/user-line.component';

@NgModule({
  declarations: [UserLineComponent],
  exports: [UserLineComponent],
  imports: [CommonModule, RouterModule, TuiAvatarModule],
})
export class SharedModule {}

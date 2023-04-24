import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellHeaderComponent } from './shell-header.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [ShellHeaderComponent],
  exports: [ShellHeaderComponent],
  imports: [CommonModule, TuiAvatarModule],
})
export class ShellHeaderModule {}

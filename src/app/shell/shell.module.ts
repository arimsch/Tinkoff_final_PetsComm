import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellHeaderModule } from './shell-header/shell-header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent],
  exports: [ShellComponent],
  imports: [CommonModule, ShellHeaderModule, RouterModule],
})
export class ShellModule {}

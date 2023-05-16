import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [HomeComponent],
  exports: [],
  imports: [CommonModule, RouterModule, TuiAvatarModule],
})
export class HomeModule {}

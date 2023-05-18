import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TuiAvatarModule, TuiInputDateModule, TuiInputFilesModule, TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserSubCardComponent } from './users-list/user-sub-card/user-sub-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './user-profile/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserSubCardComponent, UserProfileComponent, EditProfileComponent],
  imports: [CommonModule, UsersRoutingModule, TuiAvatarModule, SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiInputDateModule,
    TuiInputFilesModule],
})
export class UsersModule {}

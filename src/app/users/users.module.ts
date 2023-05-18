import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { IUsersApiServiceToken } from '../core/interfaces/i-users-api-service';
import { UsersApiService } from '../core/users-api.service';
import { SharedModule } from '../shared/shared.module';
import { UserSubCardComponent } from './users-list/user-sub-card/user-sub-card.component';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserSubCardComponent],
  imports: [CommonModule, UsersRoutingModule, TuiAvatarModule, SharedModule],
})
export class UsersModule {}

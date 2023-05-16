import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

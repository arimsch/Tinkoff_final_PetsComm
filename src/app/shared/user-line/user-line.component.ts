import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-line',
  templateUrl: './user-line.component.html',
  styleUrls: ['./user-line.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLineComponent {
  @Input()
  public user!: User|null;  
}

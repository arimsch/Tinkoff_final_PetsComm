import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-line',
  templateUrl: './user-line.component.html',
  styleUrls: ['./user-line.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLineComponent {
  @Input()
  public userName!: string;
  @Input()
  public userPhotoURL!: string;
}

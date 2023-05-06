import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-line',
  templateUrl: './user-line.component.html',
  styleUrls: ['./../../../assets/styles/common-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLineComponent {
  @Input()
  public userName!: string;

  public get userPhoto(): string {
    return 'I will get data from users.service';
  }
}

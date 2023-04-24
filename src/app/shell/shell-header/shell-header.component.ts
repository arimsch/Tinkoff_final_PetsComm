import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHeaderComponent {}

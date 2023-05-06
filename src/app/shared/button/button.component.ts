import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { align } from './align';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public align: align = 'center';
  @Input() public text = '';
  @Input() public disable = false;
}

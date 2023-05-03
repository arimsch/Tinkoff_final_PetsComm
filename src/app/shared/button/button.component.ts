import { Component, Input } from '@angular/core';
import { align } from 'src/shared/types/align';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent {
  @Input() public align: align = 'center';
  @Input() public text = '';
  @Input() public disable = false;
}

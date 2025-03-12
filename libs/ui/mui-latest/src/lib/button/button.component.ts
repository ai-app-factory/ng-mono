import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButton,
  MatButtonModule,
} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '../base/base.component';
@Component({
  selector: 'lib-button',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButton
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends BaseComponent {
  @Input() label: string = 'Button Label';
  @Input() disabled?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
  @Input() disableRipple?: boolean = false;
  @Input() icon?: string = 'home';
  @Input() buttonType:
    'basic' |
    'raised' |
    'fab' |
    'mini-fab' |
    'stroked' |
    'flat' |
    'icon' |
    'extended-fab' = 'raised';
  @Input() onClick: () => void = () => {};
  @Output() buttonClick = new EventEmitter<any>();

  onButtonPress() {
    this.buttonClick.emit("Button Clicked");
    if (this.onClick) {
      this.onClick();
    }
  }
}

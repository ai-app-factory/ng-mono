import {
  Component,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButton,
  MatButtonModule,
  MatButtonConfig
} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '../base/base.component';
@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatButton,
    MatIconModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent extends BaseComponent {
  @Input() label: string = 'Button Text';
  @Input() override disabled?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
  @Input() disableRipple?: boolean = false;
  @Input() buttonType:
    'mat-raised-button' |
    'mat-fab' |
    'mat-button' |
    'mat-flat-button' |
    'mat-stroked-button' |
    'mat-mini-fab' |
    'mat-icon-button' |
    'mat-menu-item' |
    'extended-fab' |
    'web-filled-button' |
    'web-outlined-button' |
    'web-toned-button' = 'mat-raised-button';

  @Input() icon?: string = 'home';

  @Input() onClick: () => void = () => {};

  @Output() buttonClick = new EventEmitter<any>();

  onButtonPress() {
    this.buttonClick.emit('Button Pressed from ButtonComponent');
    if (this.onClick) {
      this.onClick();
    }
  }
}



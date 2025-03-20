import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-button',
  imports: [
    CommonModule,
    MatButtonModule,
    MatButton
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'Button with Tailwind';
  @Input() disabled?: boolean = false;
  @Input() disableRipple?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
  @Input() icon?: string = 'home';

  @Input() buttonType?:
    'raised' |
    'flat' |
    'stroked' |
    'fab' |
    'extended-fab' = 'raised';

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() shape: 'pill' | 'round' | 'rectangle' = 'pill';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  @Input() onButtonClick?: () => any = () => {};

  @Output() buttonClick = new EventEmitter<string>();

  onClick() {
    this.buttonClick.emit('Button Clicked');
    if (this.onButtonClick) {
      this.onButtonClick();
    }
  }

  // get buttonClasses() {
  //   const shapeClass = this.shape ? `button-${this.shape}` : '';
  //   const sizeClass = this.size ? `button-${this.size}` : '';
  //   const colorClass = this.color ? `button-${this.color}` : '';
  //   return [shapeClass, sizeClass, colorClass];
  // }


}

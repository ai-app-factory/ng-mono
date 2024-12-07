import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule, MatButtonConfig } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


/**
 * # ButtonComponent
 * The button component is a simple button that can be used to trigger an action.
 * @class ButtonComponent
 * @property {string} label - The text to display on the button
 * @property {boolean} disabled - Whether the button is disabled
 * @property {boolean} disabledInteractive - Whether the button is interactive when disabled
 * @property {boolean} disableRipple - Whether the button has a ripple effect
 * @property {ButtonType} buttonType - The type of button to display
 * @property {string | null} icon - The icon to display on the button
 * @property {() => void} onClick - The function to call when the button is clicked
 * @property {EventEmitter<any>} buttonClick - The event emitter for the button click event
 *
 */
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
})
export class ButtonComponent {
  @Input() label: string = 'Button Text';
  @Input() disabled: boolean = false;
  @Input() disabledInteractive: boolean = false;
  @Input() disableRipple: boolean = false;
  @Input() buttonType:
    'mat-raised-button' |
    'mat-fab' |
    'mat-button' |
    'mat-flat-button' |
    'mat-stroked-button' |
    'mat-mini-fab' |
    'mat-icon-button' |
    'mat-menu-item' = 'mat-raised-button';
  @Input() icon: string | null = 'home';
  @Input() onClick: () => void = () => {};

  @Output() buttonClick = new EventEmitter<any>();

  @Input() color: string = '#000000';
  onButtonPress() {
    this.buttonClick.emit('Button Pressed from ButtonComponent');
    if (this.onClick) {
      this.onClick();
    }
  }
}

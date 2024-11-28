import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule, FormControl } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * Button Types
 * @enum {string} ButtonType
 * @readonly
 * @type ButtonType = 'mat-raised-button' | 'mat-fab' | 'mat-button' | 'mat-flat-button' | 'mat-stroked-button' | 'mat-mini-fab' | 'mat-icon-button'
 * @field RAISED - mat-raised-button
 * @field FAB - mat-fab
 * @field BUTTON - mat-button
 * @field FLAT - mat-flat-button
 * @field STROKED - mat-stroked-button
 * @field MINI_FAB - mat-mini-fab
 * @field ICON - mat-icon-button
 */
export enum ButtonType {
  RAISED = 'mat-raised-button',
  FAB = 'mat-fab',
  BUTTON = 'mat-button',
  FLAT = 'mat-flat-button',
  STROKED = 'mat-stroked-button',
  MINI_FAB = 'mat-mini-fab',
  ICON = 'mat-icon-button',
}

/**
 * Button Component
 * @class ButtonComponent
 * @property {string} label - The label of the button
 * @property {boolean} disabled - Whether the button is disabled
 * @property {ButtonType} buttonType - The type of button
 * @property {string | null} icon - The icon of the button
 * @property {boolean} disableRipple - Whether the ripple effect is disabled
 * @property {boolean} disabledInteractive - Whether the button is interactive when disabled
 * @property {EventEmitter<any>} buttonClick - The event emitter for button click
 * @method onButtonPress - The method to handle button press
 */
@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatIcon
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  @Input() label: string = 'Button Text';
  @Input() disabled: boolean = false;
  @Input() buttonType: ButtonType = ButtonType.RAISED;

  @Input() icon: string = 'home';
  @Input() disableRipple: boolean = false;
  @Input() disabledInteractive: boolean = false;

  @Output() buttonClick = new EventEmitter<any>();

  async onButtonPress() {
    this.buttonClick.emit("Button Pressed from ButtonComponent");
    console.log('Button Pressed');
  }
}

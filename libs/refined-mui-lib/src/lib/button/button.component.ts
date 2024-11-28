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
export class ButtonComponent {}

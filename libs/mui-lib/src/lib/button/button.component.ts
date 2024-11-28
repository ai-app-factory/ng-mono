import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule, FormControl } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * Button Types
 * @enum {string}
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

  @Output() buttonClick = new EventEmitter<any>();

  async onButtonPress() {
    this.buttonClick.emit("Button Pressed from ButtonComponent");
    console.log('Button Pressed');
  }
}

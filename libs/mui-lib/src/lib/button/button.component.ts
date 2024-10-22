import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule, FormControl } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';

export enum ButtonType {
  RAISED = 'mat-raised-button',
  FAB = 'mat-fab',
  BUTTON = 'mat-button',
  FLAT = 'mat-flat-button',
  STROKED = 'mat-stroked-button',
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

  @Output() buttonClick = new EventEmitter<string>();

  async onButtonPress() {
    this.buttonClick.emit("Button Pressed from ButtonComponent");
    console.log('Button Pressed');
  }
}

import { Component, Input } from '@angular/core';
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
  @Input() label: string = 'Button Text';
  @Input() disabled?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
}

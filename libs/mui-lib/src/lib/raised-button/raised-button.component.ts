import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-raised-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatButtonModule
  ],
  templateUrl: './raised-button.component.html',
  styleUrl: './raised-button.component.scss',
})
export class RaisedButtonComponent {
  @Input() label: string = 'Button Text';
  @Input() disabled: boolean = false;

  async onButtonPress() {
    console.log('Button Pressed');
  }
}

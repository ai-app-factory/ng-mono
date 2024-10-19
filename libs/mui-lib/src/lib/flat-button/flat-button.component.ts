import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-flat-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatButtonModule
  ],
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.scss',
})
export class FlatButtonComponent {
  @Input() label: string = 'Button Text';
  @Input() disabled: boolean = false;

  async onButtonPress() {
    console.log('Button Pressed');
  }
}

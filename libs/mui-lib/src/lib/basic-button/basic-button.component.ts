import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-basic-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatButtonModule
  ],
  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss',
})
export class BasicButtonComponent {
  @Input() label: string = 'Button Text';
  @Input() disabled: boolean = false;

  async onButtonPress() {
    console.log('Button Pressed');
  }

}

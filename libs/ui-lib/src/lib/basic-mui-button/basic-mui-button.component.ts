import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-basic-mui-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatButtonModule,
  ],
  templateUrl: './basic-mui-button.component.html',
  styleUrl: './basic-mui-button.component.scss',
})
export class BasicMuiButtonComponent {
  @Input() disabled: boolean = false;
  @Input() label: string = 'Basic';
}

import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-raised-mui-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatButtonModule
  ],
  templateUrl: './raised-mui-button.component.html',
  styleUrl: './raised-mui-button.component.scss',
})
export class RaisedMuiButtonComponent {
  @Input() disabled?: boolean = false;
  @Input() label: string = 'Raised';
  @Input() link: string = 'www.google.com';
}

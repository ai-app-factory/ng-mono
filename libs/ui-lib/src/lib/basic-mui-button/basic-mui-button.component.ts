import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-basic-mui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-mui-button.component.html',
  styleUrl: './basic-mui-button.component.scss',
})
export class BasicMuiButtonComponent {
  @Input() disabled: boolean = false;
  @Input() label: string = 'Basic';
}

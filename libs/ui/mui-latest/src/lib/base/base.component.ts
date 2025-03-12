import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-base',
  imports: [CommonModule],
  template: '',
  styleUrl: './base.component.scss',
})
export class BaseComponent {
  @Input() typography: 'h1' | 'h2' | 'h3' | 'h4' | 'p' = 'p';
  @Input() shape: 'square' | 'rounded' | 'pill' = 'rounded';
  @Input() size: number = 16;
  @Input() borderRadius?: number = 4;

  get classes() {
    return [
      this.typography,
      this.shape,
      'custom-size'
    ]
  }

  get styles() {
    return {
      fontSize: `${this.size}px`,
      padding: `${this.size / 2}px ${this.size}px`
    }
  }
}

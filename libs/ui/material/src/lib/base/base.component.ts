import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-base',
  template: '',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  @Input() typography: 'heading1' | 'heading2' | 'paragraph' = 'paragraph';
  @Input() shape: 'rounded' | 'square' | 'pill' = 'rounded';
  @Input() color: string = '#6200ea';
  @Input() size: number = 14;
  @Input() disabled?: boolean = false;

  get classes() {
    const baseClasses = [this.typography, this.shape, 'custom-size', 'custom-color'];
    if (this.disabled) {
      baseClasses.push('disabled');
    }
    return baseClasses;
  }

  get styles() {
    return {
      backgroundColor: this.color,
      color: this.getTextColor(this.color),
      padding: `${this.size / 2}px ${this.size}px`,
      fontSize: `${this.size}px`
    };
  }

  private getTextColor(backgroundColor: string): string {
    const color = backgroundColor.substring(1);
    const rgb = parseInt(color, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? '#000000' : '#ffffff';
  }
}

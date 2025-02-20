import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  @Input() typography: 'heading1' | 'heading2' | 'paragraph' = 'paragraph';
  @Input() shape: 'rounded' | 'square' | 'pill' = 'rounded';
  @Input() size: number = 20;

  get classes() {
    const baseClasses =
      [
        this.typography,
        this.shape,
        this.size,
      ];
    return baseClasses;
  }

}

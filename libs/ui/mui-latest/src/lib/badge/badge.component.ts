import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'lib-badge',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() disabled?: boolean = false;

  @Input() hidden?: boolean = false;

  @Input() overlap?: boolean = true;

  @Input() content: string | number = 1;

  @Input() size?: 'small' | 'medium' | 'large' = 'medium';

  @Input() position?:
    'above' |
    'after' |
    'before' |
    'below' |
    'above after' |
    'above before' |
    'below after' |
    'below before' = 'above';

  @Input() badgeFor: 'icon' | 'text' | 'button' = 'icon';

  @Input() hostLabel?: string = 'I have a badge'

  @Input() icon?: string = 'home'
}

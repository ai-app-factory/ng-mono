import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

export enum BadgeSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum BadgePosition {
  ABOVE = 'above',
  AFTER = 'after',
  BEFORE = 'before',
  BELOW = 'below',
  ABOVE_AFTER = 'above after',
  ABOVE_BEFORE = 'above before',
  BELOW_BEFORE = 'below before',
  BELOW_AFTER = 'below after'

}

export enum BadgeFor {
  BUTTON = 'button',
  TEXT = 'text',
  ICON = 'icon'
}

@Component({
  selector: 'lib-badge',
  standalone: true,
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {

  @Input() disabled: boolean = false;

  @Input() hidden: boolean = false;

  @Input() overlap: boolean = false;

  @Input() content: string | number | undefined | null = 1;

  @Input() size: BadgeSize = BadgeSize.MEDIUM

  @Input() position: BadgePosition = BadgePosition.AFTER

  @Input() badgeFor: BadgeFor = BadgeFor.TEXT;

  @Input() hostLabel: string | undefined = 'I have a badge'

  @Input() icon: string | undefined = 'home'

}

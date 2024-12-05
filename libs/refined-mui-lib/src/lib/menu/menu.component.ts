import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

export interface Menu {
  title: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  role?: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox';
  disabledRipple?: boolean;
  children?: Menu[];
}

export type MenuCloseReason = void | 'click' | 'keydown' | 'tab';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}

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
export class MenuComponent {
  @Input() menuType: 'icon' | 'text' = 'icon';
  @Input() xPosition: 'before' | 'after' = 'before';
  @Input() yPosition: 'above' | 'below' = 'below';
  @Input() overlapTrigger: boolean = false;

  @Output() closed: EventEmitter<MenuCloseReason> = new EventEmitter<MenuCloseReason>();

  @Input() set menus(menus: Menu[]) {
    this._menus.set(menus);
  }

  protected _menus = signal<Menu[]>([
    {
      title: 'Home',
      icon: 'home',
      link: '/',
    },
    {
      title: 'About',
      icon: 'info',
      link: '/about',
    },
    {
      title: 'Contact',
      icon: 'contact',
      link: '/contact',
      children: [
        {
          title: 'Email',
          link: '/contact/email',
          icon: 'email',
        },
        {
          title: 'Phone',
          link: '/contact/phone',
          icon: 'phone',
        },
        {
          title: 'Fax',
          link: '/contact/fax',
          icon: 'fax',
          disabled: true,
        }
      ]
    },
  ]);


}

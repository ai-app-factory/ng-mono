import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';

export interface Menu {
  label: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  role?: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox';
  disabledRipple?: boolean;
  menuTrigger?: string;
  children?: Menu[];
}

export type MenuCloseReason = void | 'click' | 'keydown' | 'tab';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ButtonComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() menuType: 'icon' | 'nested' = 'icon';
  @Input() xPosition: 'before' | 'after' = 'before';
  @Input() yPosition: 'above' | 'below' = 'below';
  @Input() overlapTrigger: boolean = false;

  @Output() closed: EventEmitter<MenuCloseReason> = new EventEmitter<MenuCloseReason>();

  @Input() set menus(menus: Menu[]) {
    this._menus.set(menus);
  }

  protected _menus = signal<Menu[]>([
    {
      label: 'Home',
      icon: 'home',
      link: '/',
    },
    {
      label: 'About',
      icon: 'info',
      link: '/about',
    },
    {
      label: 'Contact',
      icon: 'contact',
      link: '/contact',
      children: [
        {
          label: 'Email',
          link: '/contact/email',
          icon: 'email',
        },
        {
          label: 'Phone',
          link: '/contact/phone',
          icon: 'phone',
        },
        {
          label: 'Fax',
          link: '/contact/fax',
          icon: 'fax',
          disabled: true,
        }
      ]
    },
  ]);


}

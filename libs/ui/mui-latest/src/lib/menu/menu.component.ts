import { Component, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenu, MatMenuModule, MatMenuPanel} from '@angular/material/menu';
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
  @Input() menuTitle?: string = 'Menu';
  @Input() menuIcon?: string = 'more_vert';
  @Input() menuType: 'icon' | 'nested' | 'basic' = 'basic';



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

  
  @Input() xPosition: 'before' | 'after' = 'after';
  @Input() yPosition: 'above' | 'below' = 'below';
  @Input() overlapTrigger: boolean = false;

  protected _menuTrigger = signal<MatMenuPanel<any> | null>(null);
  @Input() disabled: boolean = false;
  @Output() closed: EventEmitter<MenuCloseReason>
    = new EventEmitter<MenuCloseReason>();

  @Input() set menus(menus: Menu[]) {
    this._menus.set(menus);
  }

  @Input() set menuTrigger(trigger: MatMenuPanel<any>) {
    this._menuTrigger.set(trigger);
  }

  // @ViewChild('menu', { static: true }) menu!: MatMenu;

}
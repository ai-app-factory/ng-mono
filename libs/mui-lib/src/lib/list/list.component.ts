import { 
  Component,
  ChangeDetectionStrategy,
  signal,
  Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

export interface ListItem {
  text: string;
  subText?: string;
  icon?: string;
  avatarURL?: string;
  selected?: boolean;
  action?: () => void;
  disabled?: boolean;
}

@Component({
  selector: 'lib-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() set type(value: string) {
    this._type.set(value);
    this.updateListItems(value);
  }

  protected _type = signal<string>('basic');
  protected _listItems = signal<ListItem[]>([]);

  updateListItems(type: string): void {
    switch (type) {
      case 'basic':
        this._listItems.set([
          { text: 'Item 1' },
          { text: 'Item 2' },
          { text: 'Item 3' },
        ]);
        break;
      case 'multi-line':
        this._listItems.set([
          { text: 'Item 1', subText: 'Subtext for item 1' },
          { text: 'Item 2', subText: 'Subtext for item 2' },
          { text: 'Item 3', subText: 'Subtext for item 3' },
        ]);
        break;
      case 'navigation':
        this._listItems.set([
          { text: 'Home', icon: 'home', action: () => alert('Navigating to Home') },
          { text: 'Settings', icon: 'settings', action: () => alert('Navigating to Settings') },
          { text: 'Profile', icon: 'person', action: () => alert('Navigating to Profile') },
        ]);
        break;
      case 'action':
        this._listItems.set([
          { text: 'Delete', icon: 'delete', action: () => alert('Item deleted') },
          { text: 'Share', icon: 'share', action: () => alert('Item shared') },
        ]);
        break;
      case 'selection':
        this._listItems.set([
          { text: 'Option 1', selected: false },
          { text: 'Option 2', selected: false },
          { text: 'Option 3', selected: false },
        ]);
        break;
      case 'icon':
        this._listItems.set([
          { text: 'Phone', icon: 'phone' },
          { text: 'Email', icon: 'email' },
        ]);
        break;
      case 'avatar':
        this._listItems.set([
          { text: 'John Doe', avatarURL: 'https://via.placeholder.com/40' },
          { text: 'Jane Smith', avatarURL: 'https://via.placeholder.com/40' },
        ]);
        break;
      case 'section':
        this._listItems.set([
          { text: 'Section 1' },
          { text: 'Section 2' },
          { text: 'Section 3' },
        ]);
        break;
      default:
        this._listItems.set([]);
    }
  }
}

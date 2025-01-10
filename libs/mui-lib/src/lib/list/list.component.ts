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
  title: string;
  text?: string;
  subText?: string;
  icon?: string;
  avatarURL?: string;
  selected?: boolean;
  action?: () => void;
  disabled?: boolean;
  href?: string;
  isActive?: boolean;
  togglePosition?: 'before' | 'after';
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
          { title: 'Item 1' },
          { title: 'Item 2' },
          { title: 'Item 3' },
        ]);
        break;
      case 'multi-line':
        this._listItems.set([
          { title: 'Item 1', text:'text for item 1', subText: 'Subtext for item 1' },
          { title: 'Item 2', text:'text for item 2', subText: "Secondary line that will wrap because the list lines is explicitly set to 3 lines. Textinside of a `matListItemTitle` or `matListItemLine` will never wrap." },
          { title: 'Item 3', text:'text for item 3', subText: 'Subtext for item 3' },
        ]);
        break;
      case 'navigation':
        this._listItems.set([
          { title: 'Link 1', href: '#', isActive: false },
          { title: 'Link 2', href: '#', isActive: true },
          { title: 'Link 3', href: '#', isActive: false },
        ]);
        break;
      case 'navigation-complex':
        this._listItems.set([
          { title: 'Link 1', href: '#', isActive: false },
          { title: 'Link 2', href: '#', isActive: true },
          { title: 'Link 3', href: '#', isActive: false },
        ]);
        break;
      case 'action':
        this._listItems.set([
          { title: 'Delete', icon: 'delete', action: () => alert('Item deleted') },
          { title: 'Share', icon: 'share', action: () => alert('Item shared') },
        ]);
        break;
      case 'selection':
        this._listItems.set([
          { title: 'Option 1', selected: true, togglePosition: 'before' },
          { title: 'Option 2', selected: true, togglePosition: 'before' },
          { title: 'Option 3', selected: false, togglePosition: 'before' },
        ]);
        break;
      case 'icon':
        this._listItems.set([
          { title: 'Phone', icon: 'phone' },
          { title: 'Email', icon: 'email' },
        ]);
        break;
      case 'avatar':
        this._listItems.set([
          { title: 'John Doe', avatarURL: 'https://via.placeholder.com/40' },
          { title: 'Jane Smith', avatarURL: 'https://via.placeholder.com/40' },
        ]);
        break;
      case 'section':
        this._listItems.set([
          { title: 'Section 1' },
          { title: 'Section 2' },
          { title: 'Section 3' },
        ]);
        break;
      default:
        this._listItems.set([]);
    }
  }

  showInfo(item: ListItem): void {
    alert(`You selected: ${item.title}`);
  }
}

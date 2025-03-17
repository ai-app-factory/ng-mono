import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule, MatSelectionListChange} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export interface ListItem {
  icon?: string;
  avatar?: string;
  title: string;
  lines?: string[];
  disabled?: boolean;
  disableRipple?: boolean;
}

export interface ListSelectionItem extends ListItem {
  selected?: boolean;
  value?: string;
  disabled?: boolean;
  disableRipple?: boolean;

}

@Component({
  selector: 'lib-list',
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() withSelection?: boolean = false;
  @Input() withDivider?: boolean = false;
  @Input() disabled?: boolean = false;
  @Input() disableRipple?: boolean = false;
  @Input() multiple?: boolean = true;
  @Input() lines?: string | number = 1;
  @Input() listType?: 'list' | 'selection' = 'list';


  @Input() set listItems(items: ListItem[]) {
    this._listItems.set(items);
  }

  @Input() set selectionItems(items: ListSelectionItem[]) {
    this._selectionItems.set(items);
  }
  protected form: FormGroup;
  protected formControl: FormControl = new FormControl();
  protected _listItems = signal<ListItem[]>([]);
  protected _selectionItems = signal<ListSelectionItem[]>([]);

  @Output() selectionChange = new EventEmitter<MatSelectionListChange>();

  constructor() {
    this.form = new FormGroup({
      formControl: this.formControl
    });
  }
}

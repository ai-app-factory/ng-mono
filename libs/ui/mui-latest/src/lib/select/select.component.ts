import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface Group {
  id: number;
  value: string;
  groups?: Group[];
  disabled?: boolean;
}

@Component({
  selector: 'lib-select',
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {

  @Input() disabled = false;

  @Input() placeholder = 'Please select an option';

  @Input() label = 'Select an option';

  @Input() multiple = false;

  @Input() option: 'nested' | 'flat' = 'flat';

  @Input() set groups(groups: Group[]) {
    this._groups.set(groups);
  }

  protected _groups = signal<Group[]>([
    {
      id: 1,
      value: 'Apple',
    },
    {
      id: 2,
      value: 'Banana',
    },
    {
      id: 3,
      value: 'Cherry',
    },
    {
      id: 4,
      value: 'Date',
    }
  ]);
}



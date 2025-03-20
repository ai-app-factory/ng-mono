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

  @Input() customTriggerText = false;

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

  selectedValue?: number | number[] | null = null;

  getCustomTriggerText(): string {
    if (this.multiple && Array.isArray(this.selectedValue)) {
      const selectedArray = this.selectedValue; // TypeScript infers this as `number[]`
      const selectedCount = selectedArray.length;

      if (selectedCount === 0) {
        return 'No options selected';
      } else if (selectedCount === 1) {
        return this._groups().find(group => group.id === selectedArray[0])?.value || '';
      } else {
        const firstSelected = this._groups().find(group => group.id === selectedArray[0])?.value || '';
        return `${firstSelected} (+${selectedCount - 1} ${selectedCount === 2 ? 'other' : 'others'})`;
      }
    } else if (!this.multiple && typeof this.selectedValue === 'number') {
      return this._groups().find(group => group.id === this.selectedValue)?.value || '';
    }
    return 'Please select an option';
  }
}



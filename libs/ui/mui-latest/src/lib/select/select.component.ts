import { Component, Input, signal, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators} from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SelectComponent implements ControlValueAccessor {

  @Input() disabled = false;
  @Input() customErrorMessage = 'This field is required';
  @Input() placeholder = 'Please select an option';
  @Input() label = 'Select an option';
  @Input() multiple = false;
  @Input() required?: boolean;
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
  validationErrors: string[] = [];

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

  formControl = new FormControl<number | number[] | null>(null);

  private onChange = (value: number | number[] | null) => {};
  private onTouched = () => {};

  writeValue(value: number | number[] | null): void {
    this.selectedValue = value;
    this.formControl.setValue(value);
  }

  registerOnChange(fn: (value: number | number[] | null) => void): void {
    this.onChange = fn;
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  validate() {
    return this.formControl.valid ? null : { invalid: true };
  }

  ngOnChanges() {
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
      
    this.formControl.setValidators(validators);
    this.formControl.updateValueAndValidity();
    }

}



import { 
  Component, 
  ChangeDetectionStrategy, 
  Input,
  forwardRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTimepickerModule, MatTimepickerOption } from '@angular/material/timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter, DateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'lib-time-picker',
  imports: [
    CommonModule,
    MatTimepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true,
    },
  ],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePickerComponent implements ControlValueAccessor {
  @Input() toggleIcon: string = 'keyboard_arrow_down';
  @Input() interval: string  | null = null;
  @Input() options: MatTimepickerOption<Date>[] | null = null;
  @Input() label: string = 'Pick a time';
  @Input() min: string | Date | null = null;
  @Input() max: string | Date | null = null;
  @Input() set locale(value: string) {
    this._adapter.setLocale(value);
  }

  private _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);

  formControl = new FormControl<Date | null>(null);

  private onChange = (value: Date | null) => {};
  private onTouched = () => {};

  writeValue(value: Date | null): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: (value: Date | null) => void): void {
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
}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy, 
  Component, 
  OnDestroy, 
  signal, 
  inject, 
  Input, 
  Inject, 
  Injectable,
  destroyPlatform,
  forwardRef
} from '@angular/core';
import {
  DateAdapter, 
  MAT_DATE_FORMATS, 
  provideNativeDateAdapter,   
  MAT_DATE_LOCALE
} from '@angular/material/core';
import {
  MatCalendar, 
  MatDatepickerModule, 
  MAT_DATE_RANGE_SELECTION_STRATEGY, 
  MatDateRangeSelectionStrategy, 
  DateRange
} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {Subject} from 'rxjs';
import {startWith, takeUntil} from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule, Validators, NG_VALIDATORS, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ExampleHeader } from './example-header.component';


/* export const DEFAULT_DATE_FORMATS = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
}; */

@Injectable()
export class DynamicRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter);

  constructor(private daysBefore: number = 2, private daysAfter: number = 2) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createDynamicRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createDynamicRange(activeDate);
  }

  private _createDynamicRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -this.daysBefore);
      const end = this._dateAdapter.addCalendarDays(date, this.daysAfter);
      return new DateRange<D>(start, end);
    }
    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'lib-date-picker',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    ExampleHeader,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideNativeDateAdapter(),
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useFactory: (component: DatePickerComponent) => {
        if (component.useCustomStrategy) {
          return new DynamicRangeSelectionStrategy(component.daysBefore, component.daysAfter);
        }
        return false;
      },
      deps: [DatePickerComponent],
    },
/*    {
      provide: MAT_DATE_FORMATS,
      useFactory: (component: DatePickerComponent) =>
        component.customDateFormats,
      deps: [DatePickerComponent],
    },*/
  ],
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() toggleIcon: string = 'keyboard_arrow_down';
  @Input() datePickerType: 'single' | 'range'  = 'single';
  @Input() actionButton: boolean = false;
  @Input() label: string = 'Pick a date';
  @Input() openMethod: 'normal' | 'button' = 'normal';

  @Input() disableInput: boolean = false;
  @Input() disableToggle: boolean = false;

  @Input() required?: boolean;

  @Input() minDate?: string | Date;
  @Input() maxDate?: string | Date;

  @Input() startDate?: string | Date;

  @Input() startView: 'month' | 'year' | 'multi-year' = 'month';

  @Input() touchUi: boolean = false;

  @Input() comparisonStart?: string | Date;
  @Input() comparisonEnd?: string | Date;

  @Input() useCustomStrategy: boolean = false;

  @Input() daysBefore?: number;
  @Input() daysAfter?: number;

  @Input() customHeader?: boolean = false;

  @Input() dateFilter: (d: Date | null) => boolean = () => true;

  @Input() set locale(value: string) {
    this._adapter.setLocale(value);
    this._locale = value;
  }

  private _adapter = inject<DateAdapter<unknown>>(DateAdapter);
  private _locale: string = 'fr-FR';

  ExampleHeader = ExampleHeader;

  get dateFromatString(): string {
    switch (this._locale) {
      case 'en-US':
        return 'MM/DD/YYYY';
      case 'bg-BG':
        return 'DD/MM/YYYY';
      case 'fr-FR':
        return 'DD/MM/YYYY';
      case 'de-DE':
        return 'DD.MM.YYYY';
      default:
        return 'DD/MM/YYYY';
    }
  }

  formControl = new FormControl<Date | Date[] | null>(null);

  private onChange = (value: Date | Date[] | null) => {};
  private onTouched = () => {};

  writeValue(value: Date | Date[] | null): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: (value: Date | Date[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  validate(control: FormControl): { [key: string]: any } | null {
    return this.formControl.valid ? null : { dateError: { valid: false } };
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
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
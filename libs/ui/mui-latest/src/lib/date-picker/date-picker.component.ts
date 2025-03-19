import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, OnDestroy, signal, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {DateAdapter, MAT_DATE_FORMATS, provideNativeDateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {Subject} from 'rxjs';
import {startWith, takeUntil} from 'rxjs/operators';


@Component({
  selector: 'lib-date-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class DatePickerComponent {
  @Input() toggleIcon: string = 'keyboard_arrow_down';
  @Input() datePickerType: 'single' | 'range'  = 'single';
  @Input() actionButton: boolean = false;
  @Input() label: string = 'Pick a date';
  @Input() openMethod: 'normal' | 'button' = 'normal';

  @Input() disableInput: boolean = false;
  @Input() disableToggle: boolean = false;

  @Input() minDate: string | Date | null = null;
  @Input() maxDate: string | Date | null = null;

  @Input() startDate: string | Date | null = null;

  @Input() startView: 'month' | 'year' | 'multi-year' = 'month';

  @Input() touchUi: boolean = false;

  @Input() set locale(value: string) {
    this._adapter.setLocale(value);
    this._locale = value;
  }

  private _adapter = inject<DateAdapter<unknown>>(DateAdapter);
  private _locale: string = 'fr-FR';

  get dateFromatString(): string {
    switch (this._locale) {
      case 'en-US':
        return 'MM/YY/YYYY';
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
}
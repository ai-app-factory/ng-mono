import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'lib-slider',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() sliderType: 'basic' | 'range' = 'basic';
  @Input() disabled?: boolean = false;
  @Input() sliderLabel?: string = 'Select a value';
  @Input() min?: number = 0;
  @Input() max?: number = 100;
  @Input() step?: number = 1;
  @Input() thumbLabel?: boolean = false;
  @Input() discrete?: boolean = false;
  @Input() showSliderValues?: boolean = false;
  @Input() displayLabel?: boolean = true;
  @Input() showTicks?: boolean = false;


  @Output() value: number = 0;
  @Output() startValue: number = 0;
  @Output() endValue: number = 80;

  @Output() valueChange = new EventEmitter<number>();
  @Output() startValueChange = new EventEmitter<number>();
  @Output() endValueChange = new EventEmitter<number>();

  onValueChange() {
    this.valueChange.emit(this.value);
  }

  onStartValueChange() {
    this.startValueChange.emit(this.startValue);
  }

  onEndValueChange() {
    this.endValueChange.emit(this.endValue);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    } else if (value >= 1000000) {
      return Math.round(value / 100000) + 'M';
    } else if (value >= 1000000000) {
      return Math.round(value / 1000000000) + 'B';
    }
    return `${value}`;
  }
}

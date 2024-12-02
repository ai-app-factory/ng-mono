import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'lib-slider',
  standalone: true,
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
  @Input() disabled = false;
  @Input() max = 100;
  @Input() min = 0;
  @Input() showTicks = false;
  @Input() step = 1;
  @Input() thumbLabel = false;
  @Input() discrete = false;

  @Output() value = 0;
  @Output() startValue = 0;
  @Output() endValue = 100;

  @Input() label?: string = 'Slider';
  @Input() showSliderValues: boolean = false;
  @Input() displayLabel: boolean = true;
  protected startSlider: any;
  protected endSlider: any;
  protected slider: any;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

}

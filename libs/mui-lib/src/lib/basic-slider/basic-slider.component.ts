import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'lib-basic-slider',
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
  templateUrl: './basic-slider.component.html',
  styleUrl: './basic-slider.component.scss',
})
export class BasicSliderComponent {
  @Input() disabled = false;
  @Input() max = 100;
  @Input() min = 0;
  @Input() showTicks = false;
  @Input() step = 1;
  @Input() thumbLabel = false;
  @Output() value = 0;
  @Input() label = 'Basic Slider';
}

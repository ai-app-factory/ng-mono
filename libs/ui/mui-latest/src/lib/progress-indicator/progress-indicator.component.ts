import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'lib-progress-indicator',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  templateUrl: './progress-indicator.component.html',
  styleUrl: './progress-indicator.component.scss',
})
export class ProgressIndicatorComponent {
  @Input() progressIndicatorType: 'spinner' | 'bar' = 'bar';
  @Input() progressBarMode?: ProgressBarMode = 'indeterminate';
  @Input() progressSpinnerMode?: ProgressSpinnerMode = 'indeterminate';
  @Input() value?: number = 0;
  @Input() diameter?: number = 50;
  @Input() strokeWidth?: number = 2;
  @Input() bufferValue?: number = 20;
}

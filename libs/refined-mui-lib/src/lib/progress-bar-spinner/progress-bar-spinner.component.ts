import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'lib-progress-bar-spinner',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './progress-bar-spinner.component.html',
  styleUrl: './progress-bar-spinner.component.scss',
})
export class ProgressBarSpinnerComponent {

  @Input() progressType: 'bar' | 'spinner' = 'bar';
  @Input() progressBarMode?: ProgressBarMode | null = 'indeterminate';
  @Input() progressSpinnerMode?: ProgressSpinnerMode | null = 'indeterminate';
  @Input() diameter?: number = 50;
  @Input() strokeWidth?: number = 1;
  @Input() bufferValue?: number = 20;
  @Input() value?: number | null = 80;

}

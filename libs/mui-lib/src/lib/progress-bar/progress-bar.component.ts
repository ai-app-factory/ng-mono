import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'lib-progress-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() value?: number | null;
  @Input() bufferValue: number = 0;
  @Input() mode: ProgressBarMode  = 'indeterminate';
}

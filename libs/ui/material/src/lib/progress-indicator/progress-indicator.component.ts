import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-progress-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-indicator.component.html',
  styleUrl: './progress-indicator.component.scss',
})
export class ProgressIndicatorComponent {}

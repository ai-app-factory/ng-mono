import { 
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrTimelineStepState, ClrTimelineLayout } from '@clr/angular';


export interface TimelineStep {
  title: string;
  description: string;
  header: string;
  state: 'NOT_STARTED' | 'CURRENT' | 'SUCCESS' | 'ERROR' | 'PROCESSING';
}

@Component({
  selector: 'lib-timeline',
  imports: [CommonModule, ClarityModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  @Input() layout: 'HORIZONTAL' | 'VERTICAL' = 'HORIZONTAL';

  protected _steps = signal<TimelineStep[]>([]);

  @Input() set steps(steps: TimelineStep[]) {
    this._steps.set(steps);
  }

  get clrLayout(): ClrTimelineLayout {
    return this.layout === 'HORIZONTAL' ? ClrTimelineLayout.HORIZONTAL : ClrTimelineLayout.VERTICAL;
  }
}

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

interface MappedTimelineStep extends Omit<TimelineStep, 'state'> {
  state: ClrTimelineStepState;
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

  protected _steps = signal<MappedTimelineStep[]>([]);

  @Input() set steps(steps: TimelineStep[]) {
    const mappedSteps = steps.map((step) => ({
      ...step,
      state: this.mapState(step.state),
    }))
    this._steps.set(mappedSteps);
  }

  get clrLayout(): ClrTimelineLayout {
    return this.layout === 'HORIZONTAL' ? ClrTimelineLayout.HORIZONTAL : ClrTimelineLayout.VERTICAL;
  }

  private mapState(state: TimelineStep['state']): ClrTimelineStepState {
    switch (state) {
      case 'NOT_STARTED':
        return ClrTimelineStepState.NOT_STARTED;
      case 'CURRENT':
        return ClrTimelineStepState.CURRENT;
      case 'SUCCESS':
        return ClrTimelineStepState.SUCCESS;
      case 'ERROR':
        return ClrTimelineStepState.ERROR;
      case 'PROCESSING':
        return ClrTimelineStepState.PROCESSING;
      default:
        return ClrTimelineStepState.NOT_STARTED;
    }
  }
}

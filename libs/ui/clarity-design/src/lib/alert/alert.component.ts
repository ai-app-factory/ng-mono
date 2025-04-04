import { 
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, userIcon, alarmClockIcon, airplaneIcon } from '@cds/core/icon';


export interface Alert {
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'unknown' | 'neutral' | 'loading';
  icon?: string;
  actions?: {
    label: string;
    callback: () => void;
  }[];
  closable?: boolean;
  appLevel?: boolean;
  lightWeight?: boolean;
  sizeSmall?: boolean;
}

@Component({
  selector: 'lib-alert',
  imports: [CommonModule, ClarityModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() showActions: boolean = false;
  @Input() appLevel: boolean = false;

  protected _alerts = signal<Alert[]>([]);

  @Input() set alerts(alerts: Alert[]) {
    this._alerts.set(alerts);
  }

  @Output() alertClosed = new EventEmitter<number>();
  @Output() groupClosed = new EventEmitter<void>();

  constructor() {
    ClarityIcons.addIcons(userIcon, alarmClockIcon, airplaneIcon);
  }

  closeAlert(index: number): void {
    const alerts = this._alerts();
    alerts.splice(index, 1);
    this._alerts.set([...alerts]);
    this.alertClosed.emit(index);
  }
}

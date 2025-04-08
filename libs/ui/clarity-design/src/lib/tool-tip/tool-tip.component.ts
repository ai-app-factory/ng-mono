import { 
  Component,
  Input,
  Output, 
  signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, userIcon, alarmClockIcon, airplaneIcon } from '@cds/core/icon';


export interface ToolTipSignPostConfig {
  title?: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'top-moddle' | 'bottom-left' | 'bottom-right' | 'right-middle' | 'left-middle';
  icon?: string;
  iconSize?: string | number;
  tooltipSize?: 'xs' | 'md' | 'sm' | 'lg';
}

@Component({
  selector: 'lib-tool-tip',
  imports: [CommonModule, ClarityModule],
  templateUrl: './tool-tip.component.html',
  styleUrl: './tool-tip.component.scss',
})
export class ToolTipComponent {
  @Input() type: 'Tool-Tip' | 'SignPost' = 'Tool-Tip';

  protected _config = signal<ToolTipSignPostConfig>({
    content: 'This is a tool tip',
    position: 'top',
    tooltipSize: 'xs',
    icon: 'info-standard',
    iconSize: "48",
  });
  @Input() set config(value: ToolTipSignPostConfig) {
    this._config.set(value);
  }

  constructor() {
    ClarityIcons.addIcons(userIcon, airplaneIcon, alarmClockIcon);
  }

  get config(): ToolTipSignPostConfig {
    return this._config();
  }
}

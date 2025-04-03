import { 
  Component, 
  Input, 
  signal,
  Output,
  EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

export interface Panel {
  title: string;
  content: string;
  description?: string;
  showDescription?: boolean;
  isOpen: boolean;
  isDisabled?: boolean;
  children?: Panel[];
}

@Component({
  selector: 'lib-accordian',
  imports: [CommonModule, ClarityModule],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss',
})
export class AccordianComponent {
  @Input() MultiPanel: boolean = false;
  @Input() HeadingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 2;
  @Input() HeadingEnabled: boolean = false;
  @Input() AccordionDisabled: boolean = false;

  @Input() set panels(panels: Panel[]) {
    this._panels.set(panels);
  }

  protected _panels = signal<Panel[]>([]);

  @Output() panelOpenChange = new EventEmitter<number>();
  togglePanel(index: number): void {
    const panels = this._panels();
    const panel = panels[index];

    if (panel.isDisabled) {
      return;
    }

    if (!this.MultiPanel) {
      panels.forEach((p, i) => {
        if (i !== index) {
          p.isOpen = false;
        }
      });
    }

    panel.isOpen = !panel.isOpen;
    this._panels.set([...panels]);
    this.panelOpenChange.emit(index);
  }
}

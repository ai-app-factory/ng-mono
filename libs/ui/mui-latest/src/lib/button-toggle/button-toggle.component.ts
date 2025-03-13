import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'lib-button-toggle',
  imports: [
    CommonModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent {
  @Input() displayGroupLabel?: boolean = false;
  @Input() groupLabel?: string = 'Select an option';
  @Input() selection?: 'single' | 'multiple' = 'single';
  @Input() displaySelectedOptions?: boolean = true;
  @Input() disabled?: boolean = false;
  @Input() hideSelectionIndicator?: boolean = false;
  @Input() vertical?: boolean = false;
  @Input() disabledInteractive?: boolean = false;

  @Output() valueChange = new EventEmitter<string>();
  @Output() selectedOption = '';
  @Output() selectedOptions = [];

  @Input() set buttonToggleLabels(labels: string[]) {
    this._buttonToggleLabels.set(labels);
  }

  protected _buttonToggleLabels = signal<string[]>(
    [
      'Bold',
      'Italic',
      'Underline'
    ]
  );

  get buttonToggleLabels() {
    return this._buttonToggleLabels();
  }
}

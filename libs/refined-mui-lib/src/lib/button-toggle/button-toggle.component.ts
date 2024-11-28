import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'lib-button-toggle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
  ],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * ButtonToggleComponent
 * @class ButtonToggleComponent
 * Displays a toggable array of buttons
 * @property {boolean} displayGroupLabel - Whether to display the group label
 * @property {boolean} displaySelectedOptions - Whether to display the selected options
 * @property {string} groupLabel - The group label
 * @property {'single' | 'multiple'} selection - The selection type
 * @property {string[]} options - The options to display in the button toggle
 * @property {boolean} disabled - Whether the button toggle is disabled
 * @property {boolean} hideSelectionIndicator - Whether to hide the selection indicator
 * @property {boolean} vertical - Whether the button toggle is vertical
 * @property {boolean} disabledInteractive - Whether the button toggle is interactive when disabled
 * @property {EventEmitter<string>} valueChange - Emits the selected value
 * @property {string} selectedOption - The selected option
 * @property {string[]} selectedOptions - The selected options
 */
export class ButtonToggleComponent {
  @Input() displayGroupLabel: boolean = true;
  @Input() displaySelectedOptions: boolean = true;
  @Input() groupLabel: string = 'Select an option';
  @Input() selection: 'single' | 'multiple' = 'single';
  @Input() options: string[] = [
    'Bold',
    'Italic',
    'Underline'
  ];
  @Input() disabled: boolean = false;
  @Input() hideSelectionIndicator: boolean = false;
  @Input() vertical: boolean = false;
  @Input() disabledInteractive: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  @Output() selectedOption = '';
  @Output() selectedOptions = [];
}

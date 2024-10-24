import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
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
    MatButtonToggleModule
  ],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonToggleComponent {
  @Input() groupLabel: string = 'Select an option';
  @Input() selection: 'single' | 'multiple' = 'single';
  @Input() options: string[] = [
    'Bold',
    'Italic',
    'Underline'
  ];
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() hideSelectionIndicator: boolean = false;


  @Output() valueChange = new EventEmitter<string>();

  @Output() selectedOption = '';
  @Output() selectedOptions = [];

}

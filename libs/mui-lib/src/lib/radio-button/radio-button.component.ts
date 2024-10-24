import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';

/**
 * @title Radio Button
 * @order 1
 * @component Radio Button
 * @section lib-radio-button
 *
 */
@Component({
  selector: 'lib-radio-button',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    MatLabel
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {

  /**
   * @description The name of the radio group.
   * @default 'Radio Group'
   * @type string
   * @section lib-radio-button
   */
  @Input() name: string = 'Radio Group';

  /**
   * @description Whether the radio group is disabled.
   * @default false
   * @type boolean
   * @section lib-radio-button
   */
  @Input() disabled: boolean = false;

  /**
   * @description The position of the label.
   * @default 'after'
   * @type 'before' | 'after'
   * @section lib-radio-button
   */
  @Input() labelPosition: 'before' | 'after' = 'after';

  /**
   * @description Whether the radio group is required.
   * @default false
   * @type boolean
   * @section lib-radio-button
   */
  @Input() required: boolean = false;

  /**
   * @description The selected value of the radio group.
   * @default ''
   * @type string
   * @section lib-radio-button
   */
  @Input() value: string = '';

  /**
   * @description Whether the radio group should display the selected option.
   * @default false
   * @type boolean
   * @section lib-radio-button
   */
  @Input() displaySelectedOption: boolean = false;

  /**
   * @description Whether the radio group should display the group label name.
   * @default true
   * @type boolean
   * @section lib-radio-button
   */
  @Input() displayGroupName: boolean = true;


  /**
   * @description The list of options to display in the radio group.
   * @default ['Option 1', 'Option 2', 'Option 3']
   * @type string[]
   * @section lib-radio-button
   *
   */
  @Input() listOfOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

  
  @Output() onRadioChange = new EventEmitter<MatRadioChange>();


  @Output() optionSelected = new EventEmitter<string>();

}

import {
  Component,
  Input,
  signal,
  EventEmitter,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule, MatRadioChange, MatRadioButton} from '@angular/material/radio';


export interface RadioButton {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  labelPosition?: 'before' | 'after';
  required?: boolean;
  hidden?: boolean;
}
@Component({
  selector: 'lib-radio-button',
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  @Input() radioGroupLabel?: string = 'Radio Group';
  @Input() displayGroupLabel?: boolean = true;
  @Input() disabled?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
  @Input() selected?: MatRadioButton;
  @Input() required?: boolean = false;
  @Input() hidden?: boolean = false;
  @Input() showSelectedOption?: boolean = false;

  @Input() set radioButtons(radioButtons: RadioButton[]) {
    this._radioButtons.set(radioButtons);
  }

  protected _radioButtons = signal<RadioButton[]>([
    {label: 'Option 1'},
    {label: 'Option 2'},
    {label: 'Option 3'}
  ]);

  @Output() onRadioChange = new EventEmitter<MatRadioChange>();
  @Output() selectedOption: string = '';
}

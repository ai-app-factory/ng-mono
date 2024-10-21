import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'lib-radio-button',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  @Input() disabled: boolean = false;
  @Input() options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  @Output() optionSelected: string = '';
}

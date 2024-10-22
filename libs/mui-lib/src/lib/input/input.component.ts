import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {

  @Input() label: string = 'Input Label';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'Enter text';
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value?.trim();
    this.valueChange.emit(this.value);
    console.log('Value Changed', this.value);
  }
}

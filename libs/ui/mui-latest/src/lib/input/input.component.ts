import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  FloatLabelType,
  MatFormField,
  MatFormFieldAppearance,
  MatFormFieldModule
} from '@angular/material/form-field';

type InputType =
  'text' |
  'number' |
  'password' |
  'email' |
  'tel' |
  'url' |
  'search' |
  'date' |
  'time' |
  'datetime-local' |
  'month' |
  'color' |
  'text-area';
@Component({
  selector: 'lib-input',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() label?: string = 'Type here';
  @Input() placeholder?: string = 'Placeholder';
  @Input() disabled?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
  @Input() value?: string = '';
  @Input() type?: InputType = 'text';
  @Input() hint?: string = '';
  @Input() icon?: string = '';
  @Input() labelAppearance?: MatFormFieldAppearance = 'fill';
  @Input() clearable?: boolean = false;
  @Input() maxLength?: string = '100';
  @Input() minLength?: string = '0';
  @Input() hintAlign?: 'start' | 'end' = 'start';
  @Input() readonly?: boolean = false;
  @Input() required?: boolean = false;
  @Input() isPrefix?: boolean = false;
  @Input() isSuffix?: boolean = false;
  @Input() prefixType?: 'icon' | 'text';
  @Input() suffixType?: 'icon' | 'text';
  @Input() prefixText?: string = '';
  @Input() suffixText?: string = '';
  @Input() prefixIcon?: string = '';
  @Input() suffixIcon?: string = '';
  @Input() floatLabel?: FloatLabelType = 'auto';

  @Output() valueChange = new EventEmitter<string>();

  protected hidePassword = signal(true);

  protected emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  protected passwordFormControl = new FormControl('', [
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ]);

  onValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value?.trim();
    this.valueChange.emit(this.value);
  }

  toggleShowPassword(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }
}

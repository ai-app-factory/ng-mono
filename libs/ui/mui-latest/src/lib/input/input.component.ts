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

export interface Prefix {
  type: 'icon' | 'text';
  text?: string;
  icon?: string;
}

export interface Suffix extends Prefix {}

export interface FormField {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  disabledInteractive?: boolean;
  value?: string;
  type?: InputType;
  hint?: string;
  appearance?: MatFormFieldAppearance;
  clearable?: boolean;
  maxLength?: string;
  minLength?: string;
  hintAlign?: 'start' | 'end';
  readonly?: boolean;
  required?: boolean;
  prefix?: Prefix;
  suffix?: Suffix;
  floatLabel?: FloatLabelType;
}

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

  @Input() value: string = '';
  @Input() minLength?: string = '0';
  @Input() maxLength?: string = '100';

  @Input() set formField(formField: FormField[]) {
    this._formField.set(formField);
  }

  protected _formField = signal<FormField[]>([
    {
      label: 'Email',
      placeholder: 'Enter your email',
      type: 'email',
      hint: 'We will nevershare your email with anyone else.',
      required: true,
      prefix: {
        type: 'icon',
        icon: 'email'
      },
      suffix: {
        type: 'icon',
        icon: 'visibility_off'
      },
      floatLabel: 'auto'
    },
    {
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password',
      hint: 'Must contain at least one uppercase letter, one number and one special character.',
      required: true,
      prefix: {
        type: 'icon',
        icon: 'lock'
      },
      suffix: {
        type: 'icon',
        icon: 'visibility_off'
      },
      floatLabel: 'auto'
    }
  ]);


  @Output() valueChange = new EventEmitter<string>();

  protected hidePassword = signal(true);

  protected emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  protected passwordFormControl = new FormControl('', [
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ]);
  


  onValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this._formField.update(formFields => {
      const updatedFields = [...formFields];
      const fieldIndex = updatedFields.findIndex(field => field.value === this.value);
      if (fieldIndex !== -1) {
        updatedFields[fieldIndex].value = inputElement.value;
      }
      return updatedFields;
    });
    this.valueChange.emit(this.value);
  }

  toggleShowPassword(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }
}

import {
  Component,
  ChangeDetectionStrategy,
  signal,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormControl, AbstractControl, Validators, FormGroup, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StepComponent } from './step.component';

export interface Step {
  label: string;
  placeholder: string;
  formControl: FormGroup;
  required?: boolean;
  errorMessage: string;
}

@Component({
  selector: 'lib-stepper',
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    StepComponent,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true,
    },
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class StepperComponent {
  @Input() orientation: 'vertical' | 'horizontal' = 'horizontal';
  @Input() linear: boolean = true;
  @Input() disableRipple: boolean = false;
  @Input() editable: boolean = true;
  @Input() labelPosition: 'bottom' | 'end' = 'end';
  @Input() headerPosition: 'top' | 'bottom' = 'top';

  @Input() set steps(steps: Step[]) {
    this._steps.set(steps);
  }

  protected _steps = signal<Step[]>([
    {
      label: 'What is your name?',
      placeholder: 'Name',
      formControl: new FormGroup('', [Validators.required]),
      required: false,
      errorMessage: 'Name is required',
    },
    {
      label: 'What is your age?',
      placeholder: 'Age',
      formControl: new FormGroup('', [Validators.required]),
      required: true,
      errorMessage: 'Age is required',
    },
    {
      label: 'What is your favorite color?',
      placeholder: 'Color',
      formControl: new FormGroup('', [Validators.required]),
      required: true,
      errorMessage: 'Color is required',
    },
  ]);

  @Output() stepChange = new EventEmitter<number>();
  @Output() completionChange = new EventEmitter<Step[]>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement setDisabledState logic if needed
  }

  onStepChange(index: number): void {
    const currentQuestion = this._steps()[index];
    this.stepChange.emit(index);
  }

  onCompletion(): void {
    this.completionChange.emit(this._steps());
  }
}

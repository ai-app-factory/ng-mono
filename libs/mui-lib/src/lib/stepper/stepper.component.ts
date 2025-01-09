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
import { FormsModule, ReactiveFormsModule, FormControl, AbstractControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';

export interface Question {
  label: string;
  placeholder: string;
  formControl: FormGroup;
  required?: boolean;
  errorMessage: string;
}

@Component({
  selector: 'lib-stepper',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
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

  @Input() set questions(questions: Question[]) {
    this._questions.set(questions);
  }

  protected _questions = signal<Question[]>([
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
  @Output() completionChange = new EventEmitter<Question[]>();

  constructor(private _formBuilder: FormBuilder) {}

  onStepChange(index: number): void {
    const currentQuestion = this._questions()[index];
    this.stepChange.emit(index);
  }

  onCompletion(): void {
    this.completionChange.emit(this._questions());
  }
}

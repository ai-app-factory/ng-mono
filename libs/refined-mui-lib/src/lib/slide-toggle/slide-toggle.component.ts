import {Component, inject, Input, signal, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MatSlideToggleModule,
  MatSlideToggle,
MatSlideToggleChange,
} from '@angular/material/slide-toggle';

export interface SlideToggle {
  label?: string;
  checked?: boolean;
  formControlName?: string;
  disabled: boolean;
  required: boolean;
  hideIcon: boolean;
  labelPosition: 'before' | 'after';
  disableRipple: boolean;
  disabledInteractive: boolean;
  displayResult?: boolean;
  displayGroupLabel?: boolean;
  groupLabel?: string;
}

@Component({
  selector: 'lib-slide-toggle',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleComponent implements SlideToggle {


  @Input() set slideToggles(slideToggles: SlideToggle[]) {
    this._slideToggles.set(slideToggles);
  };
  @Input() disabled: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() hideIcon: boolean = false;
  @Input() required: boolean = false;
  @Input() displayGroupLabel: boolean = true;
  @Input() groupLabel: string = 'Do you accept the following terms?';
  @Input() disableRipple: boolean = false;
  @Input() disabledInteractive: boolean = false;

  @Input() displayResult: boolean = true;
  private _formBuilder = inject(FormBuilder);

  @Input() set formGroup(formGroup: FormGroup) {
    this._formGroup.set(formGroup);
  }

  protected _formGroup = signal<FormGroup>(
    this._formBuilder.group({
    slideToggle1: [false],
    slideToggle2: [true, Validators.requiredTrue],
    slideToggle3: [true, Validators.requiredTrue],
  }));




  protected _slideToggles = signal<SlideToggle[]>([
    {
      label: 'Slide Toggle 1',
      checked: false,
      formControlName: 'slideToggle1',
      disabled: false,
      required: false,
      hideIcon: false,
      labelPosition: 'after',
      disableRipple: false,
      disabledInteractive: false,
  },
    {
      label: 'Slide Toggle 2',
      checked: true,
      formControlName: 'slideToggle2',
      disabled: false,
      required: false,
      hideIcon: false,
      labelPosition: 'after',
      disableRipple: false,
      disabledInteractive: false
    },
    {
      label: 'Slide Toggle 3',
      checked: false,
      formControlName: 'slideToggle3',
      disabled: false,
      required: false,
      hideIcon: false,
      labelPosition: 'after',
      disableRipple: false,
      disabledInteractive: false
    },
  ]);

  onChange($event: MatSlideToggleChange, controlName: string) {
    this._formGroup().controls[controlName].setValue($event.checked);
  }

  toggleDisabled(): any {
    if (!this.disabled) {
      new FormControl({value: false, disabled: true})
    }
    new FormControl(
      {value:false, disabled: false}
    )
  }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }



}

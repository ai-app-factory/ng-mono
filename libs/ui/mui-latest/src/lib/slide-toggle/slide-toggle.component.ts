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
  label: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  hideIcon?: boolean;
  labelPosition?: 'before' | 'after';
  formControlName?: string;
}

@Component({
  selector: 'lib-slide-toggle',
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleComponent {

  @Input() displayGroupLabel?: boolean = true;
  @Input() groupLabel?: string = 'Do you accept the following terms?';
  @Input() disableRipple?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
  @Input() disabled?: boolean = false;
  @Input() displayResult?: boolean = false;
  @Input() required?: boolean = false;
  @Input() hideIcon?: boolean = false;
  @Input() labelPosition?: 'before' | 'after' = 'after';

  @Input() set slideToggles(slideToggles: SlideToggle[]) {
    this._slideToggles.set(slideToggles);
  }

  @Input() set formGroup(formGroup: FormGroup) {
    this._formGroup.set(formGroup);
  }

  protected _slideToggles = signal<SlideToggle[]>([
    {
      label: 'I agree to the terms and conditions',
      checked: false,
      disabled: false,
    },
    {
      label: 'I agree to the privacy policy',
      checked: false,
      disabled: false,
    }
  ]);

  private _formBuilder = inject(FormBuilder);
  protected _formGroup = signal<FormGroup>(this._formBuilder.group({
    toggle1: [false],
    toggle2: [true, Validators.requiredTrue],
    toggle3: [true, Validators.requiredTrue],
  }));

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

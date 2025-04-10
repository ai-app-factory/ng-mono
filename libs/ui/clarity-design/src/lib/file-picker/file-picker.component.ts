import { 
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  forwardRef,
  signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validators,
  FormControl, 
  FormGroup,
  FormsModule,
  ReactiveFormsModule} from '@angular/forms';
import { ClrFileInputModule } from '@clr/angular';

@Component({
  selector: 'lib-file-picker',
  imports: [CommonModule, ClarityModule, ClrFileInputModule, ReactiveFormsModule],
  templateUrl: './file-picker.component.html',
  styleUrl: './file-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilePickerComponent),
      multi: true,
    },
  ]
})
export class FilePickerComponent {
  @Input () label: string = 'Choose File';
  @Input() layout: 'horizontal' | 'vertical' | 'compact' = 'horizontal';
  @Input() required: boolean = false;
  @Input() accept: string = '';
  @Input() multiple: boolean = false;
  @Input() minFileSize?: number;
  @Input() maxFileSize?: number;
  @Input() helperText: string = 'Helper Message';
  @Input() successText: string = 'Success Message';

  @Output() fileChange = new EventEmitter<File[]>();

  formControl = new FormControl<File[] | null>(null, this.required ? Validators.required : null);

  protected readonly form = new FormGroup({
    files: new FormControl<FileList | null>(null),
  });


  protected _files = signal<File[]>([]);

/*   private onChange: (value: File[]) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: File[]): void {
    
    this._files.set(value || []);
    this.formControl.setValue(value);
  }

  registerOnChange(fn: (files: File[] | null) => void): void {
    this.onChange = fn;
    this.formControl.valueChanges.subscribe((files) => {
      this.onChange(files || []);
      this.fileChange.emit(files || []);
    });
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    this._files.set(files);
    this.formControl.setValue(files);
  }

  removeFile(index: number): void {
    const files = this._files();
    files.splice(index, 1);
    this._files.set([...files]);
    this.formControl.setValue(files);
  } */
}

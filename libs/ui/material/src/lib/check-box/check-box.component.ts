import {
  Component,
  ChangeDetectionStrategy,
  signal,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCheckboxChange,
  MatCheckboxModule
} from '@angular/material/checkbox';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';
import { BaseComponent } from '../base/base.component';

export interface Task {
  name: string;
  checked: boolean;
  disabled?: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'lib-check-box',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true
    }
  ]
})
export class CheckBoxComponent
  extends BaseComponent implements ControlValueAccessor  {

  @Input() displayGroupLabel?: boolean = true;
  @Input() groupLabel?: string = 'To do list';
  @Input() override disabled?: boolean = false;

  @Input() labelPosition?: 'before' | 'after' = 'after';
  @Input() disableRipple?: boolean = false;
  @Input() disabledInteractive?: boolean = false;
  @Input() required?: boolean = false;
  @Input() indeterminate?: boolean = false;
  @Input() showSelected?: boolean = true;

  @Input() set tasks(tasks: Task[]) {
    this._tasks.set(tasks);
  }

  protected _tasks = signal<Task[]>([
    {
      name: 'Task 1',
      checked: false,
    },
    {
      name: 'Task 2',
      checked: false,
    },
    {
      name: 'Task 3',
      checked: false,
      subtasks: [
        { name: 'Subtask 1', checked: false },
        { name: 'Subtask 2', checked: false },
        { name: 'Subtask 3', checked: true }
      ]
    },
  ]);

  private onChange: (value: Task[]) => void = () => {};

  registerOnTouched(fn: any): void {
  }

  writeValue(value: Task[]): void {
    this._tasks.set(value);
  }

  registerOnChange(fn: (value: Task[]) => void): void {
    this.onChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @Output() taskChange = new EventEmitter<Task>();
  @Output() selectionChange = new EventEmitter<Task[]>();

  readonly partiallyComplete = (index: number) => {
    const task = this._tasks()[index];
    return task.subtasks?.some(subtask => subtask.checked) &&
      !task.subtasks.every(subtask => subtask.checked);
  };

  onCheckboxChange(event: MatCheckboxChange): void {
    const task = this._tasks()[0];
    this.taskChange.emit({
      ...task,
      checked: event.checked
    });
  }

  update(checked: boolean, index: number, subtaskIndex?: number) {
    this._tasks.update(task => {
      if (subtaskIndex === undefined) {
        task[index].checked = checked;
        task[index].subtasks?.forEach(subtask => subtask.checked = checked);
      } else {
        task[index].subtasks![subtaskIndex].checked = checked;
        task[index].checked = task[index].subtasks?.every(
          subtask => subtask.checked
        ) ?? true;
      }
      this.onChange([...task]);
      this.selectionChange.emit([...task]);
      return [...task];
    });
  }
}

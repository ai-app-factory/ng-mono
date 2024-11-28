import {
  Component,
  ChangeDetectionStrategy,
  computed,
  signal,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'lib-check-box',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
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
export class CheckBoxComponent implements ControlValueAccessor {



  @Input() displayGroupLabel: boolean = true;
  @Input() groupLabel: string = 'To do list';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  // @Input() checkboxAction: 'noop' | 'check' | 'check-indeterminate' | undefined;
  @Input() disableRipple: boolean = false;
  @Input() disabledInteractive: boolean = false;
  @Input() required: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() showSelected: boolean = true;

  @Input() set tasks(tasks: Task[]) {
    this._tasks.set(tasks);
  }

  protected _tasks = signal<Task[]>([
    {
      name: 'Option 1',
      completed: false,
      subtasks: [
        { name: 'Subtask 1', completed: false },
        { name: 'Subtask 2', completed: false },
        { name: 'Subtask 3', completed: true }
      ]
    },
    {
      name: 'Parent Task 2',
      completed: false,
      subtasks: [
        { name: 'Subtask 1', completed: false },
        { name: 'Subtask 2', completed: true }
      ]
    }
  ]);

  @Output() taskChange = new EventEmitter<Task>();
  @Output() selectionChange = new EventEmitter<Task[]>();

  readonly partiallyComplete = (index: number) => {
    const task = this._tasks()[index];
    return task.subtasks?.some(subtask => subtask.completed) &&
      !task.subtasks.every(subtask => subtask.completed);
  };

  onCheckboxChange(event: MatCheckboxChange): void {
    const task = this._tasks()[0]; // Assuming you want to emit the first task
    this.taskChange.emit({
      ...task,
      completed: event.checked
    });
  }

  // ControlValueAccessor implementation
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

  update(completed: boolean, index: number, subtaskIndex?: number) {
    this._tasks.update(task => {
      if (subtaskIndex === undefined) {
        task[index].completed = completed;
        task[index].subtasks?.forEach(subtask => subtask.completed = completed);
      } else {

        task[index].subtasks![subtaskIndex].completed = completed;
        task[index].completed = task[index].subtasks?.every(subtask => subtask.completed) ?? true;
      }
      this.onChange([...task]);
      this.selectionChange.emit([...task]);
      return [...task];
    });
  }

}

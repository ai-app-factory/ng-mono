import {
  Component,
  ChangeDetectionStrategy,
  computed,
  signal,
  Input,
  Output,
  EventEmitter,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

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
  styleUrls: ['./check-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() set task(task: Task) {
    this._task.set(task);
  }


  public _task = signal<Task>({
    name: 'Parent Task 1', completed: false,
    subtasks: [
      { name: 'Subtask 1', completed: false },
      { name: 'Subtask 2', completed: false },
      { name: 'Subtask 3', completed: true }
    ]
  });

  @Output() taskChange = new EventEmitter<Task>();

  readonly partiallyComplete = computed(() => {
    const task = this._task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(
      subtask => subtask.completed) &&
      !task.subtasks.every(
        subtask => subtask.completed
      );
  });

  update(completed: boolean, index?: number) {
    this._task.update(task => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(subtask => subtask.completed = completed);
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(subtask => subtask.completed) ?? true;
      }
      return {...task};
    });
  }
}

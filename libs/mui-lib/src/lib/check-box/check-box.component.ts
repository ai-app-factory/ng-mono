import {
  Component,
  ChangeDetectionStrategy,
  computed,
  signal,
  Input,
  Output,
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
  @Input() task: Task = {
    name: 'Task 1', completed: false,
    subtasks: [
      { name: 'Subtask 1', completed: false },
      { name: 'Subtask 2', completed: false },
      { name: 'Subtask 3', completed: true }
    ]
  };

  readonly partiallyComplete = computed(() => {
    if (!this.task.subtasks) {
      return false;
    }
    return this.task.subtasks.some(t => t.completed) && !this.task.subtasks.every(t => t.completed);
  });

  update(completed: boolean, index?: number) {
    if (index === undefined) {
      this.task.completed = completed;
      this.task.subtasks?.forEach(subtask => subtask.completed = completed);
    } else {
      this.task.subtasks![index].completed = completed;
      this.task.completed = this.task.subtasks?.every(subtask => subtask.completed) ?? false;
    }
  }
}

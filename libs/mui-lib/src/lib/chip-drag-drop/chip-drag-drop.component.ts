import { Component, ChangeDetectionStrategy, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'lib-chip-drag-drop',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './chip-drag-drop.component.html',
  styleUrl: './chip-drag-drop.component.scss',
})
export class ChipDragDropComponent {

  @Input() listOrientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input() items: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Grape',
    'Kiwi',
    'Lemon',
  ];

  @Input() disabled = false;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}

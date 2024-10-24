import { Component, ChangeDetectionStrategy, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

export interface item {
  name: string;
}

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

  @Input() items: item[] = [
    {name: 'Apple'},
    {name: 'Banana'},
    {name: 'Grapes'},
    {name: 'Orange'},
    {name: 'Pineapple'},
  ];

  @Input() disabled = false;

  drop(event: CdkDragDrop<item[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import {
  MatChipsModule,
  MatChipInputEvent,
  MatChipEditedEvent,
  MatChipSelectionChange
} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray
} from '@angular/cdk/drag-drop';


export interface Chip {
  label: string;
  removable?: boolean;
  withAvatar?: boolean;
  avatar?: string;
  avatarAlt?: string;
  disabled?: boolean;
  selectable?: boolean;
  editable?: boolean;

}
@Component({
  selector: 'lib-chip',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
})
export class ChipComponent {
  @Input() disableRipple: boolean = false;
  @Input() hideSingleSelectionIndicator?: boolean = false;
  @Input() multipleSelection?: boolean = false;
  @Input() chipType?:
    'basic' |
    'with-drag-drop' |
    'with-input' |
    'stacked' = 'basic';

  @Input() set chips(chips: Chip[]) {
    this._chips.set(chips);
  }

  protected _chips = signal<Chip[]>(
    [
      {
        label: 'Shiba Inu',
        removable: true,
        withAvatar: true,
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        avatarAlt: 'Shiba Inu',
        disabled: false,
        selectable: true,
        editable: false
      },
      {
        label: 'Labrador',
        removable: true,
        withAvatar: true,
        avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        avatarAlt: 'Labrador',
        disabled: true,
        selectable: true,
        editable: false
      },
      {
        label: 'Golden Retriever',
        removable: true,
        withAvatar: true,
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        avatarAlt: 'Golden Retriever',
        disabled: false,
        selectable: true,
        editable: true
      },
    ]
  );

}

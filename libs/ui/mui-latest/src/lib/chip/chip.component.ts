import {
  Component,
  ChangeDetectionStrategy,
  Input,
  inject,
  signal,
  EventEmitter,
  Output
} from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
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
  disabled?: boolean;
  withAvatar?: boolean;
  avatarSrc?: string;
  avatarAlt?: string;
  editable?: boolean;
  selectable?: boolean;
}

@Component({
  selector: 'lib-chip',
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {
  @Input() groupLabel?: string = 'Select a chip';
  @Input() displayGroupLabel?: boolean = true;
  @Input() multipleSelection?: boolean = false;
  @Input() chipType:
    'basic' |
    'with-drag-drop' |
    'stacked' |
    'with-input' = 'basic';
  @Input() dropListOrientation?: 'horizontal' | 'vertical' = 'horizontal';
  @Input() hideSelectionIndicator?: boolean = false;
  @Input() disableRipple?: boolean = false;
  @Input() disabled?: boolean = false;
  @Input() removable?: boolean = false;
  @Input() editable?: boolean = false;
  @Input() selectable?: boolean = false;
  @Input() withAvatar?: boolean = false;

  @Input() set chips(chips: Chip[]) {
    this._chips.set(chips);
  }

  protected _chips = signal<Chip[]>([
    {
      label: 'Shiba Inu',
      avatarSrc: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      avatarAlt: 'Photo of Shiba Inu'
    },
    {
      label: 'Husky',
      avatarSrc: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      avatarAlt: 'Photo of Husky'
    }
  ]);

  @Output() chipsChange = new EventEmitter<Chip[]>();
  private announcer = inject(LiveAnnouncer);
  protected formControl = new FormControl();

  removeChip(chip: Chip) {
    this._chips.update(chips => {
      const index = chips.indexOf(chip);
      if (index < 0) {
        return chips;
      }
      chips.splice(index, 1);
      this.announcer.announce(`Removed ${chip.label}`);
      return [...chips];
    });
  }

  addChip(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value) {
      this._chips.update(chips => {
        chips.push({ label: value });
        this.announcer.announce(`Added ${value}`);
        return [...chips];
      });
    }
    event.chipInput!.clear();
  }

  editChip(chip: Chip, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.removeChip(chip);
      return;
    }

    this._chips.update(chips => {
      const index = chips.indexOf(chip);
      if (index < 0) {
        return chips;
      }
      chips[index].label = value;
      this.announcer.announce(`Edited ${value}`);
      return [...chips];
    });
  }

  drop(event: CdkDragDrop<Chip[]>) {
    this._chips.update(chips => {
      moveItemInArray(chips, event.previousIndex, event.currentIndex);
      return [...chips];
    });
  }

  selectionChange(chip: Chip, event: MatChipSelectionChange) {
    const isUserInput = event.isUserInput;
    if (isUserInput) {
      this.announcer.announce(`${chip.label} 'selected by user'`);
    }
    const selected = event.selected;
    this.announcer.announce(`${chip.label} ${selected ? 'selected' : 'deselected'}`);
  }
}

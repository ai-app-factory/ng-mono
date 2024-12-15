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
  imageSrc?: string;
  alt?: string;
  disabled?: boolean;
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {

  @Input() groupLabel?: string = '';
  @Input() removable: boolean = true;
  @Input() disabled: boolean = false;
  @Input() selectable: boolean = true;
  @Input() disableRipple: boolean = false;
  @Input() hideSingleSelectionIndicator: boolean = false;
  @Input() multipleSelection: boolean = false;
  @Input() chipType: 'basic' | 'with-drag-drop' | 'with-input' | 'stacked' = 'basic';
  @Input() editable: boolean = false;
  @Input() withAvatar: boolean = false;
  @Input() dropListOrientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input() set chips(chips: Chip[]) {
    this._chips.set(chips);
  }
  protected _chips = signal<Chip[]>([
    {
      label: 'Shiba Inu',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      alt: 'Photo of Shiba Inu'
    },
    {
      label: 'Husky',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      alt: 'Photo of Husky'
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

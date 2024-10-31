import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'lib-avatar-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './avatar-chip.component.html',
  styleUrl: './avatar-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarChipComponent {
  @Input() avatar: string | null = null;
  @Input() label: string = "Shiba Inu";
  @Input() removable: boolean = true;
  @Input() disabled: boolean = false;

  removeChip(avatarChip: AvatarChip) {
    this._avatarChips.update(chips => {
      const index = chips.indexOf(avatarChip);
      if (index < 0) {
        return chips;
      }
      chips.splice(index, 1);
      return [...chips];
    });
  }
}

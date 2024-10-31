import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipEvent, MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';


export interface AvatarChip {
  label: string,
  avatarUrl: string,
  alt?: string | undefined
}

@Component({
  selector: 'lib-avatar-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './avatar-chip.component.html',
  styleUrl: './avatar-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarChipComponent {


  @Input() set avatarChips(avatarChips: AvatarChip[]) {
    this._avatarChips.set(avatarChips);
  }
  public _avatarChips  = signal<AvatarChip[]>([
    {
      label: 'Shiba Inu',
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      alt: 'Photo of Shiba Inu'
    },
    {
      label: 'Husky',
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      alt: 'Photo of Husky'
    }
  ]);

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

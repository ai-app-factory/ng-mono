import { Component, ChangeDetectionStrategy, Input, inject, signal } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface Item {
  name: string;
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
  ],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {
  readonly keywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);
  readonly formControl = new FormControl(['angular']);
  @Input() labels: Item[]  = [
    {name: 'Angular'},
    {name: 'React'},
    {name: 'Vue'},
    {name: 'Svelte'},
    {name: 'Ember'},
  ];
  @Input() disabled = false;

  announcer = inject(LiveAnnouncer);

  removeChip(keyword: string) {
    this.keywords.update(keywords => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }
      keywords.splice(index, 1);
      this.announcer.announce(`Removed ${keywords}`);
      return [...keywords];
    })
  }

  addChip(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value) {
      this.keywords.update(keywords => {
        keywords.push(value);
        this.announcer.announce(`Added ${value}`);
        return [...keywords];
      });
    }
    event.chipInput!.clear();
  }
}

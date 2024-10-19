import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'lib-stacked-chips',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './stacked-chips.component.html',
  styleUrl: './stacked-chips.component.scss',
})
export class StackedChipsComponent {
  readonly bestBoys: string[] = ['Samoyed', 'Akita Inu', 'Alaskan Malamute', 'Siberian Husky'];
}

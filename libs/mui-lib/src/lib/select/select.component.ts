import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/* export interface Group {
  id: number;
  value: string;
  groups?: Group[];
} */

@Component({
  selector: 'lib-select',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() list: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
  ];
}

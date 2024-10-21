import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-basic-icon',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './basic-icon.component.html',
  styleUrl: './basic-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicIconComponent {}

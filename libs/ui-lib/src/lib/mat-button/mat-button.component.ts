
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'lib-mat-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButton, 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
  templateUrl: './mat-button.component.html',
  styleUrl: './mat-button.component.css',
})
export class MatButtonComponent {}

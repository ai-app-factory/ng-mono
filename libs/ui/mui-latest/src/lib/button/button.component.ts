import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButton,
  MatButtonModule,
} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '../base/base.component';
@Component({
  selector: 'lib-button',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButton
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {}

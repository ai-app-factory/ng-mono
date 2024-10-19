import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-raised-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raised-button.component.html',
  styleUrl: './raised-button.component.scss',
})
export class RaisedButtonComponent {}

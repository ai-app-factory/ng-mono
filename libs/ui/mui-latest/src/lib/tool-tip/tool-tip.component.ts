import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'lib-tool-tip',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './tool-tip.component.html',
  styleUrl: './tool-tip.component.scss',
})
export class ToolTipComponent {
  @Input() toolLabel: string = 'Tool';
  @Input() tip: string = 'Tip about how to use the tool';
  @Input() position?: TooltipPosition = 'below';
  @Input() disabled?: boolean = false;
  @Input() showDelay?: number = 1000;
  @Input() hideDelay?: number = 2000;
  @Input() template?: TemplateRef<any>;
}

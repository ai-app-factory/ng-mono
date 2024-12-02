import { Component, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ButtonComponent } from '../button/button.component';
import { Chip, ChipComponent } from '../chip/chip.component';


@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ChipComponent,
    MatCardModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title?: string = 'Card Title';
  @Input() subTitle?: string = 'Card Subtitle';
  @Input() content?: string = 'Card Content';
  @Input() cardImage?: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  @Input() cardAppearance?:  'outlined' | 'raised'  = 'raised';

  @Input() imageSize?: 'small' | 'medium' | 'large' | 'extra-large' = 'medium';

  @Input() actions?: ButtonComponent[] = [
    {
      label: 'Action 1', buttonType: 'mat-raised-button', disabled: false, disabledInteractive: false, disableRipple: false,
      icon: null,
      onClick: function (): void {
        throw new Error('Function not implemented.');
      },
      buttonClick: new EventEmitter<any>(),
      onButtonPress: function (): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      label: 'Action 2', buttonType: 'mat-raised-button', disabled: false, disabledInteractive: false, disableRipple: false,
      icon: null,
      onClick: function (): void {
        throw new Error('Function not implemented.');
      },
      buttonClick: new EventEmitter<any>(),
      onButtonPress: function (): void {
        throw new Error('Function not implemented.');
      }
    }

  ];
  @Input() chips?: ChipComponent[] = [
    new ChipComponent(),
    new ChipComponent()
  ];


  @Input() cardType?: 'default' | 'with-chips' | 'with-buttons' = 'default';
}

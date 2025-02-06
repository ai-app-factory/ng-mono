import { Component, EventEmitter, Input, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
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

  @Input() set actions(actions: ButtonComponent[]) {
    this._actions.set(actions);
  }
  @Input() set chips(chips: ChipComponent[]) {
    this._chips.set(chips);
  }

  @Input() cardWidth?: string = '400px';

  protected _actions = signal<ButtonComponent[]>([
    { buttonType: 'mat-raised-button',
      label: 'Action 1',
      disabled: false,
    } as ButtonComponent,
  ]);

  protected _chips = signal<ChipComponent[]>([
    {
      chips: [{ label: 'Shiba Inu'}],
      chipType: 'basic',
      withAvatar: false,
      removable: false,
      disabled: false} as ChipComponent,
  ]);

  @Input() cardType?: 'basic' | 'with-actions' | 'with-chips'  = 'basic';
}

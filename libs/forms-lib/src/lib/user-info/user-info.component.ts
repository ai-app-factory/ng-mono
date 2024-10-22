import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicButtonComponent } from '@ng-mono/mui-lib';
import { CheckBoxComponent } from '@ng-mono/mui-lib';
import { RadioButtonComponent } from '@ng-mono/mui-lib';

@Component({
  selector: 'lib-user-info',
  standalone: true,
  imports: [CommonModule, BasicButtonComponent, CheckBoxComponent, RadioButtonComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {}

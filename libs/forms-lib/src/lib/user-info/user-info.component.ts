import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicButtonComponent } from '@ng-mono/mui-lib';
import { CheckBoxComponent } from '@ng-mono/mui-lib';
import { RadioButtonComponent } from '@ng-mono/mui-lib';
import { InputComponent } from '@ng-mono/mui-lib';
import { BasicSliderComponent } from '@ng-mono/mui-lib';
import { DatePickerComponent } from '@ng-mono/mui-lib';

@Component({
  selector: 'lib-user-info',
  standalone: true,
  imports: [
    CommonModule, 
    BasicButtonComponent, 
    CheckBoxComponent, 
    RadioButtonComponent, 
    InputComponent,
    BasicSliderComponent,
    DatePickerComponent
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  firstNameLabel = 'First Name';
  firstNamePlaceholder = 'First Name';
  lastNameLabel = 'Last Name';
  lastNamePlaceholder = 'Last Name';
  emailLabel = 'Email';
  emailPlaceholder = 'Enter Email';
  phoneLabel = 'Phone';
  phonePlaceholder = 'Enter Phone';
  buttonLabel = 'Submit';
  genderOptions = ['Male', 'Female', 'Other'];
  ageLabel = 'Age';
  groupName = 'Gender';
  tasks = [
    { name: 'Physics', completed: false },
    { name: 'Chemistry', completed: false },
    { name: 'Math', completed: false }
  ];
}

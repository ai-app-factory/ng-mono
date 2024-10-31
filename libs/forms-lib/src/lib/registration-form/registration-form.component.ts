import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@ng-mono/mui-lib';
import { DatePickerComponent } from '@ng-mono/mui-lib';
import { SelectComponent } from '@ng-mono/mui-lib';
import { SlideToggleComponent} from '@ng-mono/mui-lib';
import { ButtonComponent, ButtonType} from '@ng-mono/mui-lib';
import {ChipComponent} from '@ng-mono/mui-lib';


@Component({
  selector: 'lib-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    DatePickerComponent,
    SelectComponent,
    SlideToggleComponent,
    ButtonComponent,
    ChipComponent
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent {
  
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    phoneNumber: string = '';
    countryCode: string = '';
    birthDate: Date | null = null;
    educationLevel: string = '';
    educationLevels: string[] = [
      'High School',
      'College',
      'Bachelor\'s Degree',
      'Master\'s Degree',
      'PhD'
    ];
    agreeTerms: boolean = false;
    programmingLanguages: string[] = [];

    onFirstNameChange(value: string): void {
      this.firstName = value;
    }
  
    onLastNameChange(value: string): void {
      this.lastName = value;
    }
  
    onEmailChange(value: string): void {
      this.email = value;
    }
  
    onPhoneNumberChange(value: string): void {
      this.phoneNumber = value;
    }

    onCountryCodeChange(value: string): void {
      this.countryCode = value;
    }

    onBirthDateChange(value: Date | null): void {
      this.birthDate = value;
    }

    onEducationLevelChange(value: string): void {
      this.educationLevel = value;
    }

    onAgreeTermsChange(value: boolean): void {
      this.agreeTerms = value;
    }

    registerUser(): void {
      console.log('Registering User'); 
    }
  
}

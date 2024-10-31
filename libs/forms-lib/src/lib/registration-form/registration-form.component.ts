import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@ng-mono/mui-lib'

@Component({
  selector: 'lib-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent
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
  
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormStepComponent, PersonalInfo } from '../first-form-step/first-form-step.component';
import { SecondFormStepComponent, Subscription } from '../second-form-step/second-form-step.component';
import { DateTypeChangerComponent } from '../date-type-changer/date-type-changer.component';
import { Addon, ThirdFormStepComponent } from '../third-form-step/third-form-step.component';
import { FourthFormStepComponent } from '../fourth-form-step/fourth-form-step.component';

export type DateType = 'monthly' | 'yearly'
export interface FormData {
  personalInfo?: PersonalInfo,
  subscription?: Subscription
  addons?: Addon[]
}

export interface InputErrors {
  name: null | string
  email: null | string
  phoneNumber: null | string
}

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [CommonModule, FirstFormStepComponent, SecondFormStepComponent, ThirdFormStepComponent, FourthFormStepComponent, DateTypeChangerComponent],
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})

export class FormSectionComponent {
  @Input() currentStep!: number;
  @Input() handleNextStep!: () => void;
  @Input() handlePreviousStep!: () => void;
  dateType: DateType = 'monthly';
  formData: FormData = {
    personalInfo: undefined,
    subscription: undefined,
    addons: []
  };
  inputErrors: InputErrors = {
    name: null,
    email: null,
    phoneNumber: null,
  }

  handleDateTypeChange = () => {
    this.dateType = this.dateType === 'monthly' ? 'yearly' : 'monthly';
  }

  updateFormData = <K extends keyof FormData>(field: K, values: FormData[K]) => {
    const updatedFormData = {...this.formData, [field]: values};
    this.formData = updatedFormData;
  }

  checkInputs = () => {
    let isAnyError = false;
    if (this.formData.personalInfo !== undefined) {
      const {name, email, phoneNumber} = this.formData.personalInfo;
      if (!name) {
        this.updateInputErrors('name', 'This field is required');
        isAnyError = true;
      }
      if (!email) {
        this.updateInputErrors('email', 'This field is required');
        isAnyError = true;
      }
      if (!phoneNumber) {
        this.updateInputErrors('phoneNumber', 'This field is required');
        isAnyError = true;
      }

      if (name.length < 5 && name) {
        this.updateInputErrors('name', 'Name is too short');
        isAnyError = true;
      }
      if (phoneNumber.length < 10  && phoneNumber !== '') {
        this.updateInputErrors('phoneNumber', 'Phone number is not valid');
        isAnyError = true;
      }

      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(email) && email) {
        this.updateInputErrors('email', 'Email is not valid');
        isAnyError = true;
      }
    } else {
      this.updateInputErrors('name', 'This field is required');
      this.updateInputErrors('email', 'This field is required');
      this.updateInputErrors('phoneNumber', 'This field is required');
      return
    }

    if (!isAnyError) {
      this.handleNextStep()
    }
  }

  updateInputErrors = <K extends keyof InputErrors>(field: K, error: InputErrors[K]) => {
    const updatedInputErrors = {...this.inputErrors, [field]: error};
    this.inputErrors = updatedInputErrors;
  }

  resetInputErrors = () => {
    let resetedInputErrors = {...this.inputErrors}
    resetedInputErrors = {name: null, email: null, phoneNumber: null}
    this.inputErrors = resetedInputErrors;
  }

}

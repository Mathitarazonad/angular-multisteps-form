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

  handleDateTypeChange = () => {
    this.dateType = this.dateType === 'monthly' ? 'yearly' : 'monthly';
  }

  updateFormData = <K extends keyof FormData>(field: K, values: FormData[K]) => {
    const updatedFormData = {...this.formData, [field]: values};
    this.formData = updatedFormData;
  }
}

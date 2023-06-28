import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormStepComponent } from '../first-form-step/first-form-step.component';
import { SecondFormStepComponent } from '../second-form-step/second-form-step.component';
import { DateTypeChangerComponent } from '../date-type-changer/date-type-changer.component';
import { ThirdFormStepComponent } from '../third-form-step/third-form-step.component';
import { FourthFormStepComponent } from '../fourth-form-step/fourth-form-step.component';

export type DateType = 'monthly' | 'yearly'

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
  dateType: DateType = 'monthly'

  handleDateTypeChange = () => {
    this.dateType = this.dateType === 'monthly' ? 'yearly' : 'monthly';
  }
}

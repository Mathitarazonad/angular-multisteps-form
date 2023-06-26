import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormStepComponent } from '../first-form-step/first-form-step.component';

type DateType = 'monthly' | 'yearly'

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [CommonModule, FirstFormStepComponent],
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

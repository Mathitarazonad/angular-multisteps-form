import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateType, FormData } from '../form-section/form-section.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fourth-form-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fourth-form-step.component.html',
  styleUrls: ['./fourth-form-step.component.css']
})
export class FourthFormStepComponent {
  @Input() dateType!: DateType;
  @Input() formData!: FormData;
  @Input() updateFormData!: <K extends keyof FormData>(field: K, values: FormData[K]) => void;
  @Input() backToSubscriptionStep!: () => void;
}

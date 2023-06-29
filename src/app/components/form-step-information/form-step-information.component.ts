import { Component, Input } from '@angular/core';
import { FormStepInformation } from '../form-section/form-section.component';

@Component({
  standalone: true,
  selector: 'app-form-step-information',
  templateUrl: './form-step-information.component.html',
  styleUrls: ['./form-step-information.component.css']
})
export class FormStepInformationComponent {
  @Input() formStepInformation!: FormStepInformation;
}

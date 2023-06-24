import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-first-form-step',
  templateUrl: './first-form-step.component.html',
  styleUrls: ['./first-form-step.component.css']
})
export class FirstFormStepComponent {
  @Input() currentStep!: number;
}

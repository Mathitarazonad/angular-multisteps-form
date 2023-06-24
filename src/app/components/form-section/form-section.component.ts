import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent {
  @Input() currentStep!: number;
  @Input() handleNextStep!: () => void;
  @Input() handlePreviousStep!: () => void;
}

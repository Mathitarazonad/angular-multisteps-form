import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateType } from '../form-section/form-section.component';

@Component({
  selector: 'app-fourth-form-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fourth-form-step.component.html',
  styleUrls: ['./fourth-form-step.component.css']
})
export class FourthFormStepComponent {
  @Input() dateType!: DateType;
}

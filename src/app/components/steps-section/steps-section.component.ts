import { Component, Input, OnInit } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common'

interface Step {
  stepDesc: string;
  stepNumber: number;
}

@Component({
  standalone: true,
  imports: [StepComponent, CommonModule],
  selector: 'steps-section',
  templateUrl: './steps-section.component.html',
  styleUrls: ['./steps-section.component.css'],
})

export class StepsSectionComponent implements OnInit {

  @Input() currentStep!: number;

  steps: Step[] = [
    {stepNumber: 1, stepDesc: 'Your Info'},
    {stepNumber: 2, stepDesc: 'Select Plan'},
    {stepNumber: 3, stepDesc: 'Add-ons'},
    {stepNumber: 4, stepDesc: 'Summary'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

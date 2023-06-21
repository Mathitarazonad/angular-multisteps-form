import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() stepNumber: number = 0
  @Input() stepDesc: string = ''

  constructor() {}

  ngOnInit() {
  }

}

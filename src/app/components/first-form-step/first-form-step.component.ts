import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface PersonalInfo {
  name: string,
  email: string,
  phoneNumber: string,
}

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-first-form-step',
  templateUrl: './first-form-step.component.html',
  styleUrls: ['./first-form-step.component.css']
})

export class FirstFormStepComponent {
  personalInfo: PersonalInfo = {
    name: '',
    email: '',
    phoneNumber: ''
  }
}

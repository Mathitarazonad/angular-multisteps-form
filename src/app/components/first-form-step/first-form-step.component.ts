import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormData, InputErrors } from '../form-section/form-section.component';


export interface PersonalInfo {
  name: string,
  email: string,
  phoneNumber: string,
}

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-first-form-step',
  templateUrl: './first-form-step.component.html',
  styleUrls: ['./first-form-step.component.css']
})

export class FirstFormStepComponent implements OnInit {
  @Input() inputErrors!: InputErrors;
  @Input() resetInputErrors!: () => void;
  @Input() formData!: FormData;
  @Input() updateFormData!: <K extends keyof FormData>(field: K, values: FormData[K]) => void;
  personalInfo: PersonalInfo = {
    name: '',
    email: '',
    phoneNumber: ''
  }

  handleInput = (e: Event) => {
    this.resetInputErrors();
    const target = e.target as HTMLInputElement;
    const inputField = target.name as keyof PersonalInfo;
    const inputValue = target.value;

    this.updatePersonalInfo(inputField, inputValue);
    this.updateFormData('personalInfo', this.personalInfo);
  }

  updatePersonalInfo = <K extends keyof PersonalInfo>(field: K, value: PersonalInfo[K]) => {
    const newPersonalInfo = {...this.personalInfo, [field]: value};
    this.personalInfo = newPersonalInfo;
  }

  ngOnInit(): void {
    if (this.formData.personalInfo !== undefined) {
      this.personalInfo = this.formData.personalInfo;
    }
  }
}

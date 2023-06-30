import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-step-form';
  currentStep = 0;
  formCompleted = true;

  handleNextStep = () => {
    this.currentStep = this.currentStep + 1;
  }

  handlePreviousStep = () => {
    this.currentStep = this.currentStep - 1;
  }

  backToSubscriptionStep = () => {
    this.currentStep = 1;
  }

  completeForm = () => {
    this.formCompleted = true;
  }
}

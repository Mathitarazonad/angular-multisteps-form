import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-sent-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-sent-confirmation.component.html',
  styleUrls: ['./form-sent-confirmation.component.css']
})
export class FormSentConfirmationComponent {
  @Input() restartForm!:() => void;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateType } from '../form-section/form-section.component';

@Component({
  selector: 'app-date-type-changer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-type-changer.component.html',
  styleUrls: ['./date-type-changer.component.css']
})
export class DateTypeChangerComponent {
  @Input() dateType!: DateType;
  @Input() handleDateTypeChange!: () => void;
}

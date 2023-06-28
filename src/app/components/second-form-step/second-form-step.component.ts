import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateType } from '../form-section/form-section.component';

type SuscriptionType = 'Arcade' | 'Advanced' | 'Pro'
type MonthlyPriceType = `$${number}/mo`
type YearlyPriceType = `$${number}/yr`
type YearlyExtraType = `${number} months free`

interface Suscription {
  id: number,
  image: string
  name: SuscriptionType
  monthlyPrice: MonthlyPriceType
  yearlyPrice: YearlyPriceType
  yearlyExtra: YearlyExtraType
}


@Component({
  selector: 'app-second-form-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-form-step.component.html',
  styleUrls: ['./second-form-step.component.css']
})

export class SecondFormStepComponent {
  @Input() currentStep!: number;
  @Input() dateType!: DateType;
  selectedSuscription = 0

  suscriptions: Suscription[] = [
    {
      id: 0,
      image: '/assets/images/icon-arcade.svg',
      name: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$90/yr',
      yearlyExtra: '2 months free'
    },
    {
      id: 1,
      image: '/assets/images/icon-advanced.svg',
      name: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$120/yr',
      yearlyExtra: '2 months free'
    },
    {
      id: 2,
      image: '/assets/images/icon-pro.svg',
      name: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$150/yr',
      yearlyExtra: '2 months free'
    }
  ]

  handleSelectedSuscription = (id: number) => {
    this.selectedSuscription = id;
  }
} 

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateType, FormData } from '../form-section/form-section.component';

type SubscriptionType = 'Arcade' | 'Advanced' | 'Pro'
type MonthlyPriceType = `$${number}/mo`
type YearlyPriceType = `$${number}/yr`
type YearlyExtraType = `${number} months free`

export interface Subscription {
  id: number,
  image: string
  name: SubscriptionType
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

export class SecondFormStepComponent implements OnInit {
  @Input() dateType!: DateType;
  @Input() formData!: FormData;
  @Input() updateFormData!: <K extends keyof FormData>(field: K, values: FormData[K]) => void
  selectedSubscription = 0;

  subscriptions: Subscription[] = [
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
  ];

  getSelectedSubscription = () => {
    return this.subscriptions.find(sub => sub.id === this.selectedSubscription);
  }

  handleSelectedSubscription = (id: number) => {
    this.selectedSubscription = id;
    const selectedSuscriptionObj = this.getSelectedSubscription();
    this.updateFormData('subscription', selectedSuscriptionObj);
  }

  ngOnInit() {
    if (this.formData.subscription !== undefined) {
      const formSelectedSubscriptionId = this.formData.subscription.id;
      this.selectedSubscription = formSelectedSubscriptionId;
      return
    }

    const selectedSuscriptionObj = this.getSelectedSubscription();
    this.updateFormData('subscription', selectedSuscriptionObj);
  }
} 

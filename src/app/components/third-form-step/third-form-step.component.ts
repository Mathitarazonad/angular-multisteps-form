import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateType } from '../form-section/form-section.component';

type PriceToAddType = {
  monthly: number,
  yearly: number
}

type AddonType = 'Online Service' | 'Larger Storage' | 'Customizable Profile'

export interface Addon {
  id: number,
  selected: boolean
  name: AddonType
  description: string
  monthlyAdditionalPrice: `+$${number}/mo`
  yearlyAdditionalPrice: `+$${number}/yr`
  priceToAdd: PriceToAddType
}

@Component({
  selector: 'app-third-form-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third-form-step.component.html',
  styleUrls: ['./third-form-step.component.css']
})

export class ThirdFormStepComponent {
  @Input() dateType!: DateType;
  addons: Addon[] = [
    {
      id: 0,
      selected: false,
      name: 'Online Service',
      description: 'Access to multiplayer games',
      monthlyAdditionalPrice: '+$1/mo',
      yearlyAdditionalPrice: '+$10/yr',
      priceToAdd: {
        monthly: 1,
        yearly: 10
      }
    },
    {
      id: 1,
      selected: false,
      name: 'Larger Storage',
      description: 'Extra 1TB of cloud storage',
      monthlyAdditionalPrice: '+$2/mo',
      yearlyAdditionalPrice: '+$20/yr',
      priceToAdd: {
        monthly: 2,
        yearly: 20
      }
    },
    {
      id: 2,
      selected: false,
      name: 'Customizable Profile',
      description: 'Custom theme on your profile',
      monthlyAdditionalPrice: '+$2/mo',
      yearlyAdditionalPrice: '+$20/yr',
      priceToAdd: {
        monthly: 2,
        yearly: 20
      }
    }
  ]

  handleAddonUpdate = (id: number) => {
    const updatedAddons = this.addons.map(addon => {
      if (addon.id === id) return {...addon, selected: !addon.selected}
      return {...addon}
    });
    this.addons = updatedAddons;
  }
}

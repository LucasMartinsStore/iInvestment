import { Component, input, signal } from '@angular/core';
import { InvestmentResponse } from '../../interface/investment-response';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { STRING_CONSTANTS } from '../../../../shared/constants/string-contants';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-card-investments',
  imports: [
    MatCardModule,
    MatChipsModule,
    CurrencyPipe,
    DatePipe,
    LucideAngularModule,
    EmptyStateComponent,
  ],
  templateUrl: './card-investments.component.html',
  styleUrl: './card-investments.component.scss',
})
export class CardInvestmentsComponent {
  investmentListItems = input.required<InvestmentResponse[]>();
  readonly arrowRight = ArrowRight;
  investmentsQuantity = STRING_CONSTANTS.INVESTMENTS_QUANTITY;
  investmentsNetValue = STRING_CONSTANTS.INVESTMENTS_NET_VALUE;
  investmentsPurchaseDate = STRING_CONSTANTS.INVESTMENTS_PURCHASE_DATE;
}

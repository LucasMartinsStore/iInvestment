import { STRING_CONSTANTS } from './../../../../shared/constants/string-contants';
import { Component, inject, input, output } from '@angular/core';
import { InvestmentResponse } from '../../../home-page/interface/investment-response';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-details',
  imports: [MatListModule, MatButtonModule, DatePipe],
  templateUrl: './list-details.component.html',
  styleUrl: './list-details.component.scss',
})
export class ListDetailsComponent {
  listDetailsData = input<InvestmentResponse | null>();

  private _router = inject(Router);

  detailsPageTitle = STRING_CONSTANTS.DETAIL_PAGE_TITLE;
  detailsPageRating = STRING_CONSTANTS.DETAIL_PAGE_RATING;
  detailsPageLiquidity = STRING_CONSTANTS.DETAIL_PAGE_LIQUIDITY;
  detailsPageAccumulatedYield = STRING_CONSTANTS.DETAIL_PAGE_ACCUMULATED_YIELD;
  detailsPageAnnualYield = STRING_CONSTANTS.DETAIL_PAGE_ANNUAL_YIELD;
  detailsPageVolatility = STRING_CONSTANTS.DETAIL_PAGE_VOLATILITY;
  detailsPageRedemptionAvailable = STRING_CONSTANTS.DETAIL_PAGE_REDEMPTION_AVAILABLE;
  detailsPageMinimumRedemptionDate = STRING_CONSTANTS.DETAIL_PAGE_MINIMUM_REDEMPTION_DATE;
  detailsPageButton = STRING_CONSTANTS.DETAIL_PAGE_BUTTON;

  goToSuccess() {
    this._router.navigate(['success']);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InvestmentResponse } from '../../interface/investment-response';

@Injectable({
  providedIn: 'root',
})
export class InvestmentResponseService {
  readonly API_URL = 'http://localhost:3000/investimentos';

  private _httpClient = inject(HttpClient);

  getInvestmentsAll() {
    return this._httpClient.get<InvestmentResponse[]>(this.API_URL);
  }
}

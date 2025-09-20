import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { InvestmentResponse } from '../../../pages/home-page/interface/investment-response';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _selectedInvestment = new ReplaySubject<InvestmentResponse>(1);
  private _investmentList = new ReplaySubject<InvestmentResponse[]>(1);

  selectedInvestment$ = this._selectedInvestment.asObservable();
  investmentList$ = this._investmentList.asObservable();

  setSelectedInvestment(investment: InvestmentResponse) {
    this._selectedInvestment.next(investment);
  }
  getSelectedInvestment() {
    return this._selectedInvestment.asObservable();
  }

  setInvestmentList(investments: InvestmentResponse[]) {
    this._investmentList.next(investments);
  }
  getInvestmentList() {
    return this._investmentList.asObservable();
  }
}

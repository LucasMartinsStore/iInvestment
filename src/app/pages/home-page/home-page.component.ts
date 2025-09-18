import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { InvestmentResponseService } from './service/investment-response/investment-response.service';
import { InvestmentResponse } from './interface/investment-response';
import { ListFilter, LucideAngularModule } from 'lucide-angular';
import { CardInvestmentsComponent } from './components/card-investments/card-investments.component';
@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, LucideAngularModule, CardInvestmentsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  investmentList = signal<InvestmentResponse[]>([]);

  readonly listFilter = ListFilter;

  private _router = inject(Router);
  private _location = inject(Location);
  private _investmentResponseService = inject(InvestmentResponseService);

  ngOnInit() {
    this._getInvestments();
  }

  goToFaq() {
    this._router.navigate(['faq']);
  }

  goBack() {
    this._location.back();
  }

  private _getInvestments() {
    this._investmentResponseService.getInvestmentsAll().subscribe({
      next: (response) => {
        console.log(response);
        this.investmentList.set(response);
      },
      error: (error) => {
        console.error('Error fetching investments:', error);
      },
    });
  }
}

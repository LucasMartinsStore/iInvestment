import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { InvestmentResponseService } from './service/investment-response/investment-response.service';
import { InvestmentResponse } from './interface/investment-response';
import { ListFilter, LucideAngularModule } from 'lucide-angular';
import { CardInvestmentsComponent } from './components/card-investments/card-investments.component';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private _destroyRef = inject(DestroyRef);

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
    this._investmentResponseService
      .getInvestmentsAll()
      .pipe(takeUntilDestroyed(this._destroyRef), take(1))
      .subscribe({
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
